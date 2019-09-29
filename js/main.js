/* exported app */

let app = {
  el: '#app',
  data: {
    status: [{
      title: 'click to change'
    }, {
      img: 'img/inventory.png',
      title: 'food in inventory'
    }, {
      img: 'img/pet.png',
      title: 'already caught'
    }],
    attr: ['rideable', 'ranged', 'healer', 'tank'],
    list: [],
    sorting: 2,
    query: '',
  },
  methods: {
    'sorted': (i) => {
      if (app.sorting === i)
        return '▲';
      if (app.sorting === -i)
        return '▼';
      return '<span style="opacity:0">▼</span>';
    },
    'getString': (row, i) => {
      if (!app.query || !row[i].toLowerCase().includes(app.query.toLowerCase()))
        return row[i];
      const index = row[i].toLowerCase().indexOf(app.query.toLowerCase());
      return row[i].substr(0, index) + '<b>' +
       row[i].substr(index, app.query.length) + '</b>' +
       row[i].substr(index + app.query.length);

    },
    'testRow': (row) => {
      return !app.query ||
       row[1].toLowerCase().includes(app.query.toLowerCase()) ||
       row[2].toLowerCase().includes(app.query.toLowerCase());
    },
    refresh: () => {
      if (app.sorting > 0) {
        app.list.sort((a, b) => ('' + a[app.sorting]).localeCompare(('' + b[app.sorting])));
      } else {
        app.list.sort((a, b) => ('' + b[-app.sorting]).localeCompare(('' + a[-app.sorting])));
      }
      app['$forceUpdate']();
    },
    'setSorting': (i) => {
      if (Math.abs(app.sorting) === i) {
        app.sorting = -app.sorting;
      } else {
        app.sorting = i;
      }
      app.refresh();
    },
    'change': (i) => {
      const row = app.list.filter(r => r[0] === i)[0];
      row[7] = (row[7] + 1) % 3;
      app.save();
      app['$forceUpdate']();
    },
    save: () => {
      const d = new Array(app.list.length).fill('');
      app.list.forEach(row => {
        if (row[7])
          d[row[0]] = row[7];
      });
      cookies.set('caught', d.join('-'));
    }
  },
  'mounted': () => {
    const d = cookies.get('caught').split('-');
    data.list.forEach((row, i) => {
      app.data.list.push([i, ...row, d[i] || 0]);
    });
    setTimeout(() => {
      document.getElementById('app').setAttribute('style', '');
      app.refresh();
    });
  }
};

window.onload = () => {
  app = new Vue(app);
};