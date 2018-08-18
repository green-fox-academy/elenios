class Thing {
  name: string;
  completed: boolean;

  constructor(name: string){
      this.name = name;
     // this.completed = false;
  }

  public complete() {
      this.completed = true;
  }
}

export { Thing };
