/* exported cookies, data */

const cookies = {
  /**
   * Save a value in a cookie
   * @param {string} name
   * @param {string} value
   * @param {number | undefined} days
   */
  set: function (name, value, days = undefined) {
    const maxAge = !days ? undefined : days * 864e2;
    document.cookie = `${name}=${encodeURIComponent(value)}${maxAge ? `;max-age=${maxAge};` : ''}`;
  },
  /**
   * Get a value from a cookie
   * @param {string} name
   * @return {string} value from cookie or empty if not found
   */
  get: function (name) {
    return document.cookie.split('; ').reduce(function (r, v) {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  },
  /**
   * Delete a cookie
   * @param {string} name
   */
  delete: function (name) {
    this.set(name, '', -1);
  },
  /**
   * Clear all cookies
   */
  clear: function () {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
};

const data = {
  list: [
    //index(0), food(1), pet(2), biomes(3), rideable(4), ranged(5), healer(6), tank(7), beta(8)
    [0, 'Apple Ring', 'Crocodile', ['jungle', 'ocean'], true, false, false, false, false],
    [1, 'Banana Split', 'Monkey', ['jungle', 'ocean'], false, false, false, false, false],
    [2, 'Biscuit Roll', 'Bumblebee', ['greenlands'], false, false, false, false, false],
    [3, 'Blackberry Marmalade', 'Porcupine', ['desert', 'jungle', 'mountain'], true, false, false, false, false],
    [4, 'Bloodorange Juice', 'Mosquito', ['desert', 'jungle', 'lavalands'], false, false, false, false, false],
    [5, 'Buckhorn', 'Beaver', ['greenlands'], true, false, false, false, false],
    [6, 'Bubble Gum', 'Collie', ['city', 'greenlands'], true, false, false, false, false],
    [7, 'Blue Jelly', 'Blue Slime', [], true, false, false, false, false],
    [8, 'Bread', 'Bark Beetle', [], true, false, false, false, false],
    [9, 'Cabbage rolls', 'Snail', [], true, false, false, false, false],
    [10, 'Candied Apple', 'Horse', ['greenlands', 'jungle', 'snowlands'], true, false, false, false, false],
    [11, 'Candy', 'Black Cat', ['city', 'greenlands'], true, false, false, false, false],
    [12, 'Caramel Chocolate Bar', 'Desert Runner', ['desert'], true, false, false, false, false],
    [13, 'Carrot', 'Bunny', ['forest', 'greenlands'], true, false, false, false, false],
    [14, 'Cereal Bar', 'Chicken', ['greenlands'], false, false, false, false, false],
    [15, 'Cinnamon Roll', 'Turtle', ['river', 'greenlands'], true, false, false, true, false],
    [16, 'Chocolate Cake', 'Raccoon', ['greenlands', 'forest', 'island', 'hills'], false, false, false, false, false],
    [17, 'Chocolate Cookie', 'Peacock', ['greenlands', 'forest', 'island', 'hills'], true, false, false, false, false],
    [18, 'Chocolate Cupcake', 'Brown Alpaca', [], true, false, false, false, false],
    [19, 'Chocolate Donut', 'Mole', ['greenlands', 'forest'], false, false, false, false, false],
    [20, 'Chocolate Ice Cream,\nPeanut', 'Baby Mammoth', ['snowlands'], true, false, false, false, false],
    [21, 'Cotton Candy', 'Sheep', ['city', 'forest', 'greenlands'], true, false, false, false, false],
    [22, 'Croissant', 'Scottish Terrier', ['city', 'greenlands'], true, false, false, false, false],
    [23, 'Curry', 'Fire Beetle', ['lavalands', 'desert'], true, false, false, false, false],
    [24, 'Date Cookie', 'Camel', ['desert'], true, false, false, false, false],
    [25, 'Eucalyptus Candy', 'Koala', ['jungle'], false, false, false, false, false],
    [26, 'Fruit Basket', 'Fly', ['forest', 'greenlands'], false, false, false, false, false],
    [27, 'Ginger Tartlet', 'Parrot', ['jungle', 'desert', 'forest', 'lavalands'], false, false, false, false, false],
    [28, 'Green Jelly', 'Green Slime', ['desert'], true, false, false, false, false],
    [29, 'Lemon Tart', 'Lemon Beetle', ['greenlands', 'mountain', 'forest'], true, false, false, false, false],
    [30, 'Licorice Candy', 'Crow', ['greenlands', 'forest'], true, false, false, false, false],
    [31, 'Lollipop', 'Owl', ['greenlands', 'forest'], false, false, false, false, false],
    [32, 'Lolly', 'Snout Beetle', ['greenlands', 'hills'], true, true, false, false, false],
    [33, 'Mango Juice', 'Bat', ['cave'], false, false, false, false, false],
    [34, 'Melon Ice Cream', 'Midge', ['desert'], false, false, false, false, false],
    [35, 'Milk Chocolate Bar,\nRice Milk Chocolate Bar', 'Plain Runner', ['greenlands'], true, false, false, false, false],
    [36, 'Mineral Water', 'Radishling Sprout', ['greenlands'], false, false, false, false, false],
    [37, 'Mint Chocolate Bar', 'Leaf Runner', ['jungle'], true, false, false, false, false],
    [38, 'Mixed Salad', 'Caterpillar', ['greenlands', 'jungle'], true, false, false, false, false],
    [39, 'Pancakes', 'Biter', ['hills', 'mountain'], false, false, false, false, false],
    [40, 'Peanut', 'Baby Elephant', ['desert'], true, false, false, false, false],
    [41, 'Pink Jelly', 'Pink Slime', [], true, false, false, false, false],
    [42, 'Popcorn', 'Hornet', ['greenlands'], false, false, false, false, false],
    [43, 'Pumpkin Mash', 'Pig', ['greenlands', 'city', 'forest'], true, false, false, false, false],
    [44, 'Radicchio Salad', 'Earth Caterpillar', ['mountain'], true, false, false, false, false],
    [45, 'Raspberry Juice', 'Flamingo', ['island'], false, false, false, false, false],
    //46, Rice Milk Chocolate Bar merged with Milk Chocolate Bar
    [47, 'Salted Caramel', 'Seagull', ['ocean', 'island', 'jungle'], false, false, false, false, false],
    [48, 'Soft Ice', 'Penguin', ['snowlands'], false, false, false, false, false],
    [49, 'Spring Water', 'Cormling Sprout', ['greenlands'], false, false, false, false, false],
    [50, 'Strawberry Cake', 'Squirrel', ['forest', 'greenlands'], false, false, false, false, false],
    [51, 'Strawberry Cocktail', 'Crab', [], true, false, false, false, false],
    [52, 'Sugar Candy', 'Duckbill', ['river'], true, false, false, false, false],
    [53, 'Vanilla Cupcake', 'Alpaca (light)', [], true, false, false, false, false],
    [54, 'Waffle', 'Terrier', ['city', 'greenlands'], true, false, false, false, false],
    [55, 'Water Ice', 'Spitter', ['ocean', 'river', 'lake'], false, true, true, false, false],
    [56, 'White Chocolate Bar', 'Snow Runner', ['snowlands'], true, false, false, false, false],
    [57, 'Yellow Jelly', 'Yellow Slime', ['desert'], true, false, false, false, false],
    [58, 'Banana Mash', 'Warthog', [], false, false, false, false, false],
    [59, 'Unknown', 'Alpha Dog', [], false, false, false, false, true],
    [60, 'Unknown', 'Savage Dog', [], false, false, false, false, true],
    [61, 'Unknown', 'Mana Deer', [], false, false, false, false, true],
  ]
};