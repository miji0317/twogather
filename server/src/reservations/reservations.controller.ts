import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { Reservation } from './entities/reservation.entity';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/users.entity';
import { GetUser } from 'src/custom.decorator';

@Controller('api/reservations')
@ApiTags('예약 API')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @UseGuards(AuthGuard())
  async reserve(
    @GetUser() user: User,
    @Body() createReservationDto: CreateReservationDto,
  ) {
    const newReservation = await this.reservationsService.create(
      createReservationDto,
      user,
    );
    return {
      status: 200,
      success: true,
      description: '예약 성공',
      data: newReservation,
    };
  }

  @Get()
  @ApiOperation({
    summary: '예약 findAll API',
    description: '전체 예약 목록을 불러온다.',
  })
  @ApiResponse({
    status: 200,
    description: '전체 예약 목록',
    type: Reservation,
  })
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '특정 예약 찾는 API',
    description: '예약의 ID로 특정 예약을 불러온다.',
  })
  @ApiResponse({ status: 200, description: '특정 예약', type: Reservation })
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '특정 예약 수정 API',
    description: '예약 ID로 특정 예약을 수정한다.',
  })
  @ApiResponse({ status: 200, description: '수정된 예약', type: Reservation })
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '특정 예약 삭제 API',
    description: '예약 ID로 특정 예약 삭제한다.',
  })
  @ApiResponse({ status: 200, description: '삭제된 예약', type: Reservation })
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}