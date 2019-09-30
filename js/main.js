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
    attr: ['rideable', 'ranged', 'healer', 'tank', 'beta'],
    list: [],
    saved: [],
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
        return row[i].replace(/\n/g, '<br>');
      const index = row[i].toLowerCase().indexOf(app.query.toLowerCase());
      return (row[i].substr(0, index) + '<b>' +
       row[i].substr(index, app.query.length) + '</b>' +
       row[i].substr(index + app.query.length)).replace(/\n/g, '<br>');

    },
    'testRow': (row) => {
      return row[1] !== 0 && (!app.query ||
       row[1].toLowerCase().includes(app.query.toLowerCase()) ||
       row[2].toLowerCase().includes(app.query.toLowerCase()));
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
    'change': (row) => {
      app.saved[row[0]] = ((app.saved[row[0]]||0) + 1) % 3;
      setTimeout(app.save);
      app['$forceUpdate']();
    },
    save: () => {
      cookies.set('caught', app.saved.join('-').replace(/0/g, ''));
    },
    'getSaved': (row) => {
      return app.status[app.saved[row[0]]] || {};
    }
  },
  'mounted': () => {
    app.data.saved = cookies.get('caught').split('-').map(v => !v ? 0 : parseInt(v));
    app.data.list = data.list;
    setTimeout(() => {
      document.getElementById('app').setAttribute('style', '');
      app.refresh();
    });
  }
};

window.onload = () => {
  app = new Vue(app);
};