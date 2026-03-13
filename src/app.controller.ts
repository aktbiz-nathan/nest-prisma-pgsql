import {
  Controller,
  Get,
  Post,
  Res,
  Req,
  Body,
  Query,
  HttpCode,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

/* If you change the controller path from default to e.g. 'cars' */
/* 
localhost:3000/cars will return "Hello World!" 
instead of localhost:3000/ which is the default path for the AppController.
*/
@Controller() // The `@Controller` decorator means the decorator is used to define a controller in NestJS
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /* If you change the @Get decorator from default to e.g. 'bmw' */
  @Get('bmw') // The `@Get` decorator means this method will handle GET requests to the '/bmw' endpoint.
  getBmw(): any {
    /* If you want to return data e.g., a number or JSON, change the string into the corresponding data format (number | object). */
    // return 1; // number
    // return { model: 'BMW Sedan', year: 2020 }; // object (JSON)
    // return 'Hello BMW! Sedan'; // string
    const car = new BMW(1, 'BMW M3 GTR', 2020); // Response handling with a class instance
    return car;
  }

  /* Using express library to use res statement instead of return */
  @Get('res')
  getResExpress(@Res() res): any {
    const car = new BMW(12, 'Honda Civic', 2011);
    res.send(car);
    // return car;
  }

  /* Creating Post and get API endpoints to fetch cars */
  @Get('cars')
  getCars(): any {
    return cars;
  }

  /* Using express library to use req statement */
  @Post('cars')
  createCar(
    @Req() req: { body: { car_id: number; model: string; year: number } },
  ): any {
    const { car_id, model, year } = req.body;
    const car = new BMW(car_id, model, year);
    cars.push(car); // Assuming you have an array to store cars
    return car;
  }

  /* Using express library to use body statement */
  @Post('cars-body')
  createCarBody(
    @Body() body: { car_id: number; model: string; year: number },
  ): any {
    const { car_id, model, year } = body;
    const car = new BMW(car_id, model, year);
    cars.push(car);
    return car;
  }

  /* Using express library to use query statement */
  /* This endpoint allows filtering cars based on model and year */
  /* 
    Query it like this:
    /cars-query?model=Honda&year=2020
    /cars-query?model=Toyota
    /cars-query?year=2019
  */
  @Get('cars-query')
  createCarsQuery(
    @Query('model') model?: string,
    @Query('year') year?: number,
  ) {
    const yearNumber = year ? Number(year) : undefined;
    return cars.filter(
      (car) =>
        (!model || car.model === model) &&
        (yearNumber === undefined || car.year === yearNumber),
    );
  }

  /* Other features */
  // Status code
  @Post('cars-status')
  @HttpCode(201) // This decorator sets the HTTP status code for the response to 201 (Created) and can be customize.
  createCarStatus(
    @Body() body: { car_id: number; model: string; year: number },
  ): any {
    const { car_id, model, year } = body;
    const car = new BMW(car_id, model, year);
    cars.push(car);
    return car;
  }

  /* Create animal with id */
  @Post('animal')
  createAnimal(
    @Body() body: { animal_id: number; name: string; species: string },
  ): any {
    const { animal_id, name, species } = body;
    const animal = new Animal(animal_id, name, species);
    animals.push(animal);
    return animal;
  }

  /* @Get(':id'): Get, Patch, Delete specific data by id */
  @Get(
    'animal/:animal_id',
  ) /* Call this endpoint with a specific animal ID, e.g., /animal/1 */
  getAnimal(@Param('animal_id') animal_id: string): any {
    const animalId = Number(animal_id);
    return animals.find((animal) => animal.animal_id === animalId);
  }
}

const cars: BMW[] = []; // Array to store car instances
const animals: Animal[] = []; // Array to store animal instances
/* Class instance created to use in the getBmw method */
class BMW {
  constructor(
    public car_id: number,
    public model: string,
    public year: number,
  ) {}
}

class Animal {
  constructor(
    public animal_id: number,
    public name: string,
    public species: string,
  ) {}
}
