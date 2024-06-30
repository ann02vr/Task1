import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    visitors: [],
    food: [],
  }),
  getters: {
    foodDisabled: (state) => {
      return state.visitors.length == 0 ? true : false;
    },
    resultsDisabled: (state) => {
      return state.food.length == 0 ? true : false;
    },
  },
  actions: {
    deleteVisitor(name) {
      let index = 0;
      this.visitors.forEach(function (item, i) {
        if (item.name === name) {
          index = i;
        }
      });
      this.visitors.splice(index, 1);
    },
    addVisitor(name) {
      if (name.trim().length > 0 && this.isUnique(name)) {
        this.visitors.push({ name: name.trim(), waste: 0 });
      }
    },
    addFood(foodName, price, consumers) {
      if (foodName.trim().length > 0 && price > 0 && consumers.length > 0) {
        this.food.push({
          foodName: foodName.trim(),
          price: price,
          consumers: consumers,
        });
      }
      this.calcWaste(price, consumers);
    },
    deleteFood(foodName, consumers) {
      let index = 0;
      this.food.forEach(function (item, i) {
        if (
          item.foodName === foodName &&
          item.consumers.toString() === consumers.toString()
        ) {
          index = i;
        }
      });
      this.food.splice(index, 1);
    },
    isUnique(name) {
      let result = true;
      for (const item of this.visitors) {
        if (item.name === name.trim()) {
          result = false;
          break;
        } else {
          result = true;
        }
      }
      return result;
    },
    calcWaste(price, consumers) {
      const pricePerPerson = price / consumers.length;
      for (let visitor of this.visitors) {
        if (consumers.find((consumer) => consumer === visitor.name)) {
          visitor.waste += pricePerPerson;
        }
      }
    },
  },
});
