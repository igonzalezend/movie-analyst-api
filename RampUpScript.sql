create table if not exists `Publications` (
    `name` varchar(250) not null,
    `avatar` varchar(250), 
    primary key (`name`) 
);

create table if not exists `Reviewers` (
    `name` varchar(250) not null,
    `publication` varchar(250),
    `avatar` varchar(250),
    primary key (`name`),
    constraint `fk_publication` foreign key (`publication`) references `Publications`(`name`)
);

create table if not exists `Movies` (
    `title` varchar(250) not null,
    `release_year` varchar(250),
    `score` int(11),
    `reviewer` varchar(250),
    `publication` varchar(250),
    primary key (`title`),
    constraint `fk_reviewer` foreign key (`reviewer`) references `Reviewers`(`name`)
);


