use andebank
go

drop table if exists Løn;
drop table if exists Prioritet;
drop table if exists Transaktion;
drop table if exists Konto;
drop table if exists KundeHarKonto;
drop table if exists Kunde;
drop table if exists Medarbejder;
drop table if exists Afdeling;
drop table if exists Bank;
drop table if exists PostDistrikt;


create table PostDistrikt (
   postNr int,
   bynavn char(20),
   primary key (postNr) );

create table Bank (
   navn char(30),
   adresse char(30),
   postNr int,
   foreign key (postNr) references PostDistrikt (postNr) );

create table Afdeling (
   regNr int,
   navn char(20),
   adresse char(30),
   postNr int,
   tlfNr char(11),
   primary key (regNr),
   foreign key (postNr) references PostDistrikt (postNr));

create table Medarbejder (
   cprNr char(10),
   afdeling int,
   titel char(20),
   navn char(30),
   adresse char(30),
   postNr int,
   primary key (cprNr),
   foreign key (postNr) references PostDistrikt (postNr),
   foreign key (afdeling) references Afdeling (regNr) );

create table Kunde (
   cprNr char(10),
   navn char(30),
   adresse char(30),
   postNr int,
   primary key (cprNr),
   foreign key (postNr) references PostDistrikt (postNr) );

create table KundeHarKonto (
  cprNr char(10),
  regNr int,
  ktonr BigInt );

create table Konto (
   regNr int,
   ktoNr BigInt,
   tekst char(20),
   saldo real,
   renteIndlån real,
   renteUdlån real,
   primary key (regNr, ktoNr),
   foreign key (regNr) references Afdeling (regNr) );

create table Transaktion (
   regNr int,
   ktoNr BigInt,
   dato char(10),
   tekst char(20),
   beløb real,
   foreign key (regNr, ktoNr) references Konto  (regNr, ktoNr));

create table Løn (
   regNr int,
   ktoNr BigInt,
   låneret real,
   primary key (regNr, ktoNr),
   foreign key (regNr, ktoNr) references Konto (regNr, ktoNr) );

create table Prioritet (
   regNr int,
   ktoNr BigInt,
   hovedstol real,
   primary key (regNr, ktoNr),
   foreign key (regNr, ktoNr) references Konto (regNr, ktoNr) );





insert into PostDistrikt (postNr, bynavn)
  values ( 1313, 'Andeby');
insert into PostDistrikt (postNr, bynavn)
  values ( 9191, 'Gåserød');
insert into PostDistrikt (postNr, bynavn)
  values ( 3456, 'Griseløse');

insert into Bank (navn, adresse, postNr)
  values ( 'Andeby Bank A/S', 'Joakim von And Boulevarden 4', 1313);

insert into Afdeling (regNr, navn, adresse, postNr, tlfNr)
  values ( 1234, 'Andeby Nygade', 'Andeby Nygade 21', 1313, '+4589135689');
insert into Afdeling (regNr, navn, adresse, postNr, tlfNr)
  values ( 1216, 'Gåserød', 'Gåserød Bygade 14', 9191, '+4589121241');
insert into Afdeling (regNr, navn, adresse, postNr, tlfNr)
  values ( 1220, 'Griseløse', 'Gammel Torv 2', 3456, '+4589421212');

insert into Medarbejder (cprNr, afdeling, titel, navn, adresse, postNr)
  values ( '1209631223', 1234, 'Afdelingsdirektør', 'Mickie Mouse', 'Spidsmusehegnet 1', 1313);
insert into Medarbejder (cprNr, afdeling, titel, navn, adresse, postNr)
  values ( '2210711443', 1234, 'Erhvervsrådgiver', 'Fedtmule', 'Spidsmusehegnet 3', 1313);
insert into Medarbejder (cprNr, afdeling, titel, navn, adresse, postNr)
  values ( '3112692132', 1234, 'Erhvervsrådgiver', 'Minnie Mouse', 'Andeby Nygade 11', 1313);
insert into Medarbejder (cprNr, afdeling, titel, navn, adresse, postNr)
  values ( '1504788775', 1234, 'Privatrådgiver', 'Sorteper', 'Forbrydervænget 9', 1313);
insert into Medarbejder (cprNr, afdeling, titel, navn, adresse, postNr)
  values ( '2712598753', 1216, 'Privatrådgiver', 'Fætter Guf', 'Bondegården 3', 9191);

insert into Kunde (cprNr, navn, adresse, postNr)
  values ( '1209631223', 'Store Stygge Ulv', 'Skovkanten 1', 3456);
insert into Kunde (cprNr, navn, adresse, postNr)
  values ( '2210711443', 'Lille Stygge Ulv', 'Skovkanten 1', 3456);
insert into Kunde (cprNr, navn, adresse, postNr)
  values ( '3112692132', 'De tre små grise', 'Skovkanten 7', 3456);
insert into Kunde (cprNr, navn, adresse, postNr)
  values ( '1504788758', 'Andersine', 'Andeby Nygade 57', 1313);
insert into Kunde (cprNr, navn, adresse, postNr)
  values ( '2712598723', 'Anders And', 'Paradisæblevej 13', 1313);

insert into Konto (regNr, ktoNr, tekst, saldo, renteIndlån, renteUdlån)
  values ( 1234, 1234567, 'Lønkonto', 10000.00, 1.2, 5.2);
insert into Konto (regNr, ktoNr, tekst, saldo, renteIndlån, renteUdlån)
  values ( 1234, 1231236, 'Lønkonto', 5000.00, 1.2, 5.2);
insert into Konto (regNr, ktoNr, tekst, saldo, renteIndlån, renteUdlån)
  values ( 1234, 1357967, 'Lønkonto', 12000.00, 1.2, 5.2);
insert into Konto (regNr, ktoNr, tekst, saldo, renteIndlån, renteUdlån)
  values ( 1216, 1256788, 'Lønkonto', 15000.00, 1.2, 5.2);
insert into Konto (regNr, ktoNr, tekst, saldo, renteIndlån, renteUdlån)
  values ( 1216, 2234567, 'Boliglån', 2550000.00, 1.2, 5.2);
insert into Konto (regNr, ktoNr, tekst, saldo, renteIndlån, renteUdlån)
  values ( 1234, 2231236, 'Boliglån', 3175000.00, 1.2, 5.2);

insert into KundeHarKonto (cprNr, regNr, ktonr) 
  values ( '1209631223', 1234, 2231236 );
insert into KundeHarKonto (cprNr, regNr, ktonr) 
  values ( '2210711443', 1234, 2231236 );
insert into KundeHarKonto (cprNr, regNr, ktonr) 
  values ( '3112692132', 1216, 1256788 );
insert into KundeHarKonto (cprNr, regNr, ktonr) 
  values ( '3112692132', 1234, 1357967 );

insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 2231236, '2008-01-02', 'Indbetaling', 5000.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 2231236, '2008-04-01', 'Indbetaling', 25000.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 2231236, '2008-08-03', 'Udbetaling', 500.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-04', 'Uddbetaling', 1000.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-05', 'Uddbetaling', 50.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-06', 'Uddbetaling', 250.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-07', 'Uddbetaling', 1250.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-08', 'Uddbetaling', 255.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-10', 'Uddbetaling', 300.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-11', 'Uddbetaling', 410.00);
insert into Transaktion (regNr, ktoNr, dato, tekst, beløb)
  values ( 1234, 1357967, '2008-08-12', 'Udbetaling', 50.00);

insert into Løn (regNr, ktoNr, låneret)
  values ( 1234, 1234567, 10000.00);
insert into Løn (regNr, ktoNr, låneret)
  values ( 1234, 1231236, 5000.00);
insert into Løn (regNr, ktoNr, låneret)
  values ( 1234, 1357967, 12000.00);
insert into Løn (regNr, ktoNr, låneret)
  values ( 1216, 1256788, 15000.00);

insert into Prioritet (regNr, ktoNr, hovedstol)
  values ( 1216, 2234567, 5550000.00);
insert into Prioritet (regNr, ktoNr, hovedstol)
  values ( 1234, 2231236, 4500000.00);
