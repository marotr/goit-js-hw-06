
class Storage {
    constructor({ items }) {
      this.items = items;
    }
    getItems() {
      return this.items;
    }
    addItem(newItem) {
      this.items.push(newItem);
      return this.items.length;
    }
    removeItem(itemToRemove) {
        const index = this.items.indexOf(itemToRemove);
        if (index !== -1) {
          this.items.splice(index, 1);
          return true; 
        }
        return false; 
      }
  }
  
  const storage = new Storage({ items: ["Nanitoids", "Prolonger", "Antigravitator"] });

  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  