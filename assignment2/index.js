class Person {
  constructor(name, age, salary, sex) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sex = sex;
  }
  static sort(arr, field, order = "asc") {
    const newArr = [...arr];
    const quickSort = (newArr, low, high) => {
      if (low < high) {
        let partition = findPartition(newArr, low, high);
        quickSort(newArr, low, partition - 1);
        quickSort(newArr, partition + 1, high);
      }
    };
    const findPartition = (array, low, high) => {
      const pivot = array[high][field];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (
          (order === "asc" && array[j][field] < pivot) ||
          (order === "desc" && array[j][field] > pivot)
        ) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      return i + 1;
    };
    quickSort(newArr, 0, newArr.length - 1);
    return newArr;
  }
}

const persons = [
    new Person('A', 30, 60000, 'F'),
    new Person('B', 25, 50000, 'M'),
    new Person('C', 35, 70000, 'M'),
    new Person('d', 28, 65000, 'F'),
  ];
  
  const sortedByNameAsc = Person.sort(persons, 'name', 'asc');
  const sortedByAgeDesc = Person.sort(persons, 'age', 'desc');
  
  console.log('Sorted by Name (asc):', sortedByNameAsc);
  console.log('Sorted by Age (desc):', sortedByAgeDesc);