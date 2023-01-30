import { Injectable } from '@nestjs/common';
import sequelize from 'sequelize';
//import sequelize, { Sequelize } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class MedicaleService {
  constructor() { }

   seqProvider = new Sequelize({
    dialect: 'mssql',
    host: 'server',
    port: 1433,
    username: 'sa',
    password: '1102@smim',
    database: 'MEDICALE',
    define: {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    },
  });

  async createNew(data): Promise<any> {
    const sql = `INSERT INTO TIERS (CODETIERS, ADRESSE, RAISON_SOCIALE, CLT_FRNS, COMPTE, SOMMEIL, NATURE, SEXE, lib_cpatient, FONCTION_CONTACT, EMAIL, id_teledeclaration)VALUES 
    ('${data.CODETIERS}', '${data.ADRESSE}', '${data.RAISON_SOCIALE}','C','411100','0', 'ORDONNANCE', '${data.SEXE}','SMIM', '${data.FONCTION_CONTACT}',
    '${data.EMAIL}', '${data.id_teledeclaration}')`;

    return await this.seqProvider.query(sql, {
      type: sequelize.QueryTypes.INSERT
    });
  }

  createUser = (input) => {
    const sql = `
      INSERT INTO users (name, nickname, created_at, updated_at)
      VALUES ('${input.name}', '${input.nickname}', datetime('now'), datetime('now'));`

    return this.seqProvider.query(sql, {
      type: sequelize.QueryTypes.INSERT
    })
  }

  async changeState(data) {
    const sql = `UPDATE TIERS SET SOMMEIL = ${data.SOMMEIL} WHERE (id_teledeclaration LIKE '${data.id}') AND (CODETIERS = SUBSTRING('${data.CODETIERS}', 0, 12))`
    return this.seqProvider.query(sql, {
      type: sequelize.QueryTypes.UPDATE
    })
  }

}