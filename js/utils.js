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
    ['Apple Ring', 'Crocodile', true, false, false, false],
    ['Banana Split', 'Monkey', false, false, false, false],
    ['Biscuit Roll', 'Bumblebee', false, false, false, false],
    ['Blackberry Marmalade', 'Porcupine', true, false, false, false],
    ['Bloodorange Juice', 'Mosquito', false, false, false, false],
    ['Buckhorn', 'Beaver', true, false, false, false],
    ['Bubble Gum', 'Collie', true, false, false, false],
    ['Blue Jelly', 'Blue Slime', true, false, false, false],
    ['Bread', 'Bark Beetle', true, false, false, false],
    ['Cabbage rolls', 'Snail', true, false, false, false],
    ['Candied Apple', 'Horse', true, false, false, false],
    ['Candy', 'Black Cat', true, false, false, false],
    ['Caramel Chocolate Bar', 'Desert Runner', true, false, false, false],
    ['Carrot', 'Bunny', true, false, false, false],
    ['Cereal Bar', 'Chicken', false, false, false, false],
    ['Cinnamon Roll', 'Turtle', true, false, false, true],
    ['Chocolate Cake', 'Raccoon', false, false, false, false],
    ['Chocolate Cookie', 'Peacock', true, false, false, false],
    ['Chocolate Cupcake', 'Brown Alpaca', true, false, false, false],
    ['Chocolate Donut', 'Mole', false, false, false, false],
    ['Chocolate Ice Cream, Peanut', 'Baby Mammoth', true, false, false, false],
    ['Cotton Candy', 'Sheep', true, false, false, false],
    ['Croissant', 'Scottish Terrier', true, false, false, false],
    ['Curry', 'Fire Beetle', true, false, false, false],
    ['Date Cookie', 'Camel', true, false, false, false],
    ['Eucalyptus Candy', 'Koala', false, false, false, false],
    ['Fruit Basket', 'Fly', false, false, false, false],
    ['Ginger Tartlet', 'Parrot', false, false, false, false],
    ['Green Jelly', 'Green Slime', true, false, false, false],
    ['Lemon Tart', 'Lemon Beetle', true, false, false, false],
    ['Licorice Candy', 'Crow', true, false, false, false],
    ['Lollipop', 'Owl', false, false, false, false],
    ['Lolly', 'Snout Beetle', true, true, false, false],
    ['Mango Juice', 'Bat', false, false, false, false],
    ['Melon Ice Cream', 'Midge', false, false, false, false],
    ['Milk Chocolate Bar, Rice Milk Chocolate Bar', 'Plain Runner', true, false, false, false],
    ['Mineral Water', 'Radishling Sprout', false, false, false, false],
    ['Mint Chocolate Bar', 'Leaf Runner', true, false, false, false],
    ['Mixed Salad', 'Caterpillar', true, false, false, false],
    ['Pancakes', 'Biter', false, false, false, false],
    ['Peanut', 'Baby Elephant', true, false, false, false],
    ['Pink Jelly', 'Pink Slime', true, false, false, false],
    ['Popcorn', 'Hornet', false, false, false, false],
    ['Pumpkin Mash', 'Pig', true, false, false, false],
    ['Radicchio Salad', 'Earth Caterpillar', true, false, false, false],
    ['Raspberry Juice', 'Flamingo', false, false, false, false],
    [], //Rice Milk Chocolate Bar merged with Milk Chocolate Bar
    ['Salted Caramel', 'Seagull', false, false, false, false],
    ['Soft Ice', 'Penguin', false, false, false, false],
    ['Spring Water', 'Cormling Sprout', true, false, false, false],
    ['Strawberry Cake', 'Squirrel', false, false, false, false],
    ['Strawberry Cocktail', 'Crab', true, false, false, false],
    ['Sugar Candy', 'Duckbill', true, false, false, false],
    ['Vanilla Cupcake', 'Light Alpaca', true, false, false, false],
    ['Waffle', 'Terrier', true, false, false, false],
    ['Water Ice', 'Spitter', false, true, true, false],
    ['White Chocolate Bar', 'Snow Runner', true, false, false, false],
    ['Yellow Jelly', 'Yellow Slime', true, false, false, false],
    ['Banana Mash', 'Warthog', false, false, false, false],
  ]
};