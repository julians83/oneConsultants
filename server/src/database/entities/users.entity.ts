// export class Database {}

import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column
  lastName: string;

  @Column
  document: string;

  @Column
  date_birth: string;

  @Column
  landline: string;

  @Column
  phone: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column
  gender: string;

  @Column
  marital_status: string;

  @Column
  address: string;

  @Column
  education: string;

  @Column
  title: string;

  @Column
  institute: string;

  @Column
  graduation_year: string;

  @Column
  course: string;

  @Column
  english: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
