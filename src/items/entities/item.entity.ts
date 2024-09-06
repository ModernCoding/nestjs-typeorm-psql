import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('items')
export class Item {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;
}
