import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'meta-option',
})

export class MetaOption {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'json', nullable: false })
    metaValue: any;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

}