参考ページ
https://qiita.com/elipmoc101/items/9b1e6b3efa62f3c2a166

add package
```
npm i --save @nestjs/typeorm typeorm sqlite3
```
add /ormconfig.json

```
{
    "type": "sqlite",
    "database": "data/dev.sqlite",
    "entities": [
        "dist/entities/**/*.entity.js"
    ],
    "migrations": [
        "dist/migrations/**/*.js"
    ],
    "logging": true
}
```

add in TypeOrmModule app.module

```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！

@Module({
  imports: [TypeOrmModule.forRoot()], //追加！
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
```

add entity /src/entities/memo.entity.ts

```
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Memo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;
}
```