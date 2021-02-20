// changed "strictPropertyInitialization": to false in tsconfig.json
// enable a decorator api "experimentalDecorators": true, AND "emitDecoratorMetadata": true in tsconfig.json

// represents the DB table Orphanages as class
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Image from './Image';


@Entity("orphanages") // typeorm link this class with DB orphanages
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
  
  @Column()
  latitude: number;
  
  @Column()
  longitude: number;
  
  @Column()
  about: string;
  
  @Column()
  instructions: string;
  
  @Column()
  opening_hours: string;
  
  @Column()
  open_on_weekends: boolean;

  // there is no @Column(), it doesn't exist in the database
  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'] // when I insert/update images it will automatically update everything related to images
  }) // target and inverse side
  @JoinColumn({ name: 'orphanage_id' }) // column name which is stored the column of images and orphanages
  images: Image[];
}