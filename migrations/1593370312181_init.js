/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: 'id',
        login: { type: 'varchar(255)', notNull: true },
        firstName: { type: 'varchar(30)', notNull: true },
        lastName: { type: 'varchar(30)', notNull: true },
        email: { type: 'varchar(255)', notNull: true },
        salt: { type: 'varchar(255)', notNull: true },
        passwordHash: { type: 'varchar(255)', notNull: true },
        phone: { type: 'varchar(255)', notNull: true },
        isActive: { type: 'boolean', notNull: true, default: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
        updatedAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      })
};

exports.down = pgm => {};
