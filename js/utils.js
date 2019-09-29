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
    //food(0), pet(1), rideable(2), ranged(3), healer(4), tank(5)
    [0, 'Apple Ring', 'Crocodile', true, false, false, false],
    [1, 'Banana Split', 'Monkey', false, false, false, false],
    [2, 'Biscuit Roll', 'Bumblebee', false, false, false, false],
    [3, 'Blackberry Marmalade', 'Porcupine', true, false, false, false],
    [4, 'Bloodorange Juice', 'Mosquito', false, false, false, false],
    [5, 'Buckhorn', 'Beaver', true, false, false, false],
    [6, 'Bubble Gum', 'Collie', true, false, false, false],
    [7, 'Blue Jelly', 'Blue Slime', true, false, false, false],
    [8, 'Bread', 'Bark Beetle', true, false, false, false],
    [9, 'Cabbage rolls', 'Snail', true, false, false, false],
    [10, 'Candied Apple', 'Horse', true, false, false, false],
    [11, 'Candy', 'Black Cat', true, false, false, false],
    [12, 'Caramel Chocolate Bar', 'Desert Runner', true, false, false, false],
    [13, 'Carrot', 'Bunny', true, false, false, false],
    [14, 'Cereal Bar', 'Chicken', false, false, false, false],
    [15, 'Cinnamon Roll', 'Turtle', true, false, false, true],
    [16, 'Chocolate Cake', 'Raccoon', false, false, false, false],
    [17, 'Chocolate Cookie', 'Peacock', true, false, false, false],
    [18, 'Chocolate Cupcake', 'Brown Alpaca', true, false, false, false],
    [19, 'Chocolate Donut', 'Mole', false, false, false, false],
    [20, 'Chocolate Ice Cream,\nPeanut', 'Baby Mammoth', true, false, false, false],
    [21, 'Cotton Candy', 'Sheep', true, false, false, false],
    [22, 'Croissant', 'Scottish Terrier', true, false, false, false],
    [23, 'Curry', 'Fire Beetle', true, false, false, false],
    [24, 'Date Cookie', 'Camel', true, false, false, false],
    [25, 'Eucalyptus Candy', 'Koala', false, false, false, false],
    [26, 'Fruit Basket', 'Fly', false, false, false, false],
    [27, 'Ginger Tartlet', 'Parrot', false, false, false, false],
    [28, 'Green Jelly', 'Green Slime', true, false, false, false],
    [29, 'Lemon Tart', 'Lemon Beetle', true, false, false, false],
    [30, 'Licorice Candy', 'Crow', true, false, false, false],
    [31, 'Lollipop', 'Owl', false, false, false, false],
    [32, 'Lolly', 'Snout Beetle', true, true, false, false],
    [33, 'Mango Juice', 'Bat', false, false, false, false],
    [34, 'Melon Ice Cream', 'Midge', false, false, false, false],
    [35, 'Milk Chocolate Bar,\nRice Milk Chocolate Bar', 'Plain Runner', true, false, false, false],
    [36, 'Mineral Water', 'Radishling Sprout', false, false, false, false],
    [37, 'Mint Chocolate Bar', 'Leaf Runner', true, false, false, false],
    [38, 'Mixed Salad', 'Caterpillar', true, false, false, false],
    [39, 'Pancakes', 'Biter', false, false, false, false],
    [40, 'Peanut', 'Baby Elephant', true, false, false, false],
    [41, 'Pink Jelly', 'Pink Slime', true, false, false, false],
    [42, 'Popcorn', 'Hornet', false, false, false, false],
    [43, 'Pumpkin Mash', 'Pig', true, false, false, false],
    [44, 'Radicchio Salad', 'Earth Caterpillar', true, false, false, false],
    [45, 'Raspberry Juice', 'Flamingo', false, false, false, false],
    //46, Rice Milk Chocolate Bar merged with Milk Chocolate Bar
    [47, 'Salted Caramel', 'Seagull', false, false, false, false],
    [48, 'Soft Ice', 'Penguin', false, false, false, false],
    [49, 'Spring Water', 'Cormling Sprout', false, false, false, false],
    [50, 'Strawberry Cake', 'Squirrel', false, false, false, false],
    [51, 'Strawberry Cocktail', 'Crab', true, false, false, false],
    [52, 'Sugar Candy', 'Duckbill', true, false, false, false],
    [53, 'Vanilla Cupcake', 'Light Alpaca', true, false, false, false],
    [54, 'Waffle', 'Terrier', true, false, false, false],
    [55, 'Water Ice', 'Spitter', false, true, true, false],
    [56, 'White Chocolate Bar', 'Snow Runner', true, false, false, false],
    [57, 'Yellow Jelly', 'Yellow Slime', true, false, false, false],
    [58, 'Banana Mash', 'Warthog', false, false, false, false],
    [59, 'Unknown', 'Alpha Dog', false, false, false, false],
    [60, 'Unknown', 'Savage Dog', false, false, false, false],
    [61, 'Unknown', 'Mana Deer', false, false, false, false],
  ]
};