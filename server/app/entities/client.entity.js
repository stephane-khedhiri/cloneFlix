import {EntitySchema} from "typeorm";

export const ClientEntity = new EntitySchema({
    name: "client",
    columns: {
        id: {
            type : Number,
            primary: true,
            generated: true,
        },
        lastName: {
            type: String,
            nullable: false
        },
        firstName: {
          type: String,
          nullable: false
        }

    }

})