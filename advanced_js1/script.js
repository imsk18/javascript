class Student{
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }

    

}
Student.prototype.padhlo = function(){
    console.log('hey');
}


let s1 = new Student('vishal',19,'ee');
let s2 = new Student('sk',20,'Bca');
let s3 = new Student('abhay',19,'mca');

class Mobile{
    constructor(Brand,Ram,Battery,price){
        this.Brand = Brand;
        this.Ram = Ram;
        this.Battery = Battery;
        this.price = price;
    }
    call(){
        console.log(this.Brand + ' is calling');
    }
}

let m1 = new Mobile('vivo','8gb',6000,25000);
let m2 = new Mobile('Nothing','8gb',55500,25000);
let m3 = new Mobile('iphone','8gb',5000,45000);
// m1.call();


class Bike{
    constructor(){
        this.name = 'pulsar';
        this.speed = 120;
        this.price = 'pulsar';

    }
}
let MyBike = new Bike();

