import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'; /* Decorators for handling HTTP requests */
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //* @Post() - This decorator indicates that this method will handle POST requests to the '/users' endpoint.
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //* @Get() - This decorator indicates that this method will handle GET requests to the '/users' endpoint.
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // * @Get(':id') - This decorator indicates that this method will handle GET requests to the '/users/:id' endpoint, where ':id' is a route parameter.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // * @Patch(':id') - This decorator indicates that this method will handle PATCH requests to the '/users/:id' endpoint, where ':id' is a route parameter.
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // * @Delete(':id') - This decorator indicates that this method will handle DELETE requests to the '/users/:id' endpoint, where ':id' is a route parameter.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
