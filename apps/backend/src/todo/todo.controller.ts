import { Controller, Header, Req, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @Header('Cache-Control', 'no-store') // custom response header
  findAll(@Req() request: Request): string {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any, @Query() queryParams: any): string {
    console.log('Params = ', params);
    console.log('Query params', queryParams);
    return this.todoService.findOne(params.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
