// changed "strictPropertyInitialization": to false in tsconfig.json
// enable a decorator api "experimentalDecorators": true, AND "emitDecoratorMetadata": true in tsconfig.json

// represents the DB table Orphanages as class
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Orphanage from './Orphanage';


@Entity("images") // typeorm link this class with DB orphanages
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}