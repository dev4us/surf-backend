import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscribed } from 'src/subscribed/subscribed.entity';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { PostController } from './post.controller';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Subscribed])],
  controllers: [PostController],
  providers: [PostService, UserService],
})
export class PostModule {}
