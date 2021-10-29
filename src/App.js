import React, { Component } from 'react';

class App extends Component {
  constructor( props ) {
  super( props );
    this.state = {
      data: [
        {
          "Player": "Abreu, Jose",
          "Salary": "$11,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Acevedo, Andury",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ackley, Dustin",
          "Salary": "$3,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Adames, Cristhian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Adams, Austin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Adams, Matt",
          "Salary": "$1,650,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Adrianza, Ehire",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aguilar, Jesus",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ahmed, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Albers, Matt",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alberto, Hanser",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alburquerque, Al",
          "Salary": "$1,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alcantara, Arismendy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alcantara, Raul",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alcantara, Victor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alexander, Scott",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alfaro, Jorge",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Allen, Cody",
          "Salary": "$4,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Almonte, Abraham",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Almonte, Miguel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alonso, Yonder",
          "Salary": "$2,650,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Altherr, Aaron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Altuve, Jose",
          "Salary": "$$$3,687,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alvarez, Dariel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alvarez, Dario",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alvarez, Henderson",
          "Salary": "$4,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alvarez, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Alvarez, R.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Amarista, Alexi",
          "Salary": "$1,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Anderson, Brett",
          "Salary": "$15,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Anderson, Chase",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Anderson, Cody",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Anderson, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Andriese, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Andrus, Elvis",
          "Salary": "$15,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Anna, Dean",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aoki, Nori",
          "Salary": "$5,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aplin, Andrew",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aquino, Jayson",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Araujo, Elvis",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Archer, Chris",
          "Salary": "$2,916,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Arcia, Orlando",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Arcia, Oswaldo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Arenado, Nolan",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Armstrong, Shawn",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aro, Jonathan",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Arrieta, Jake",
          "Salary": "$10,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Asche, Cody",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Asher, Alec",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Avila, Alex",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Avilan, Luis",
          "Salary": "$1,390,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aviles, Mike",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Axford, John",
          "Salary": "$4,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Aybar, Erick",
          "Salary": "$8,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Baez, Javier",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Baez, Pedro",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bailey, Homer",
          "Salary": "$18,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Baker, Dylan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bandy, Jett",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Banuelos, Manny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barbato, Johnny",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barnes, Austin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barnes, Brandon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barnes, Jacob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barnes, Matt",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barnette, Tony",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barney, Darwin",
          "Salary": "$1,050,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barnhart, Tucker",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Baron, Steve",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barraclough, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barrett, Aaron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barrett, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Barrios, Yhonathan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bassitt, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bastardo, Antonio",
          "Salary": "$5,375,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bauer, Trevor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Baumann, Buddy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bautista, Jose",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Beck, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Beckham, Gordon",
          "Salary": "$1,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Beckham, Tim",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bedrosian, Cam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Beeler, Dallas",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bell, Josh",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bellatti, Andrew",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Belt, Brandon",
          "Salary": "$6,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Beltran, Carlos",
          "Salary": "$15,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Beltre, Adrian",
          "Salary": "$18,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Benoit, Joaquin",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bergman, Christian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bernard, Wynton",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Berry, Tim",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Betances, Dellin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bethancourt, Christian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bettis, Chad",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Betts, Mookie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Biagini, Joe",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Biddle, Jesse",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bird, Greg",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blach, Ty",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Black, Ray",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blackburn, Clayton",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blackmon, Charlie",
          "Salary": "$3,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blanco, Andres",
          "Salary": "$1,450,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blanco, Gregor",
          "Salary": "$3,900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blanton, Joe",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blash, Jabari",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blazek, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Blevins, Jerry",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bogaerts, Xander",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bolsinger, Mike",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bonifacio, Emilio",
          "Salary": "$1,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bonifacio, Jorge",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bostick, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bour, Justin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bourjos, Peter",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bourn, Michael",
          "Salary": "$14,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bowman, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Boxberger, Brad",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Boyd, Matt",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brach, Brad",
          "Salary": "$1,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bracho, Silvino",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bradley, Archie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bradley, Jackie Jr.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brantley, Michael",
          "Salary": "$7,375,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brantly, Rob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Braun, Ryan",
          "Salary": "$20,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brennan, Brandon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brentz, Bryce",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brett, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brice, Austin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bridwell, Parker",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brito, Socrates",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Britton, Zach",
          "Salary": "$6,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Broadway, Mike",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brooks, Aaron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brothers, Rex",
          "Salary": "$1,420,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brown, Brooks",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Brown, Trevor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Broxton, Jonathan",
          "Salary": "$3,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Broxton, Keon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bruce, Jay",
          "Salary": "$$12,541,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bryant, Kris",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Buchanan, David",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Buchholz, Clay",
          "Salary": "$13,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Buchter, Ryan",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bumgarner, Madison",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Bundy, Dylan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Burawa, Danny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Burgos, Enrique",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Burns, Billy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Butera, Drew",
          "Salary": "$1,162,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Butler, Billy",
          "Salary": "$11,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Butler, Eddie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Butler, Joey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Buxton, Byron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cabrera, Asdrubal",
          "Salary": "$8250000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cabrera, Mauricio",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cabrera, Melky",
          "Salary": "$14,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cabrera, Miguel",
          "Salary": "$28,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cabrera, Ramon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cahill, Trevor",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cain, Lorenzo",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cain, Matt",
          "Salary": "$20,833,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Calhoun, Kole",
          "Salary": "$3,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Caminero, Arquimedes",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Campbell, Eric",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Campos, Leonel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Campos, Vicente",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Candelario, Jeimer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Canha, Mark",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cano, Robinson",
          "Salary": "$24,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Capps, Carter",
          "Salary": "$987,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Carpenter, Matt",
          "Salary": "$6,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Carrasco, Carlos",
          "Salary": "$4,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Carrera, Ezequiel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Carroll, Scott",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Carter, Chris",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Casali, Curt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cashner, Andrew",
          "Salary": "$7,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Casilla, Santiago",
          "Salary": "$6,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castellanos, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castillo, Rusney",
          "Salary": "$11,271,429",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castillo, Welington",
          "Salary": "$3,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castro, Daniel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castro, Jason",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castro, Miguel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Castro, Starlin",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cave, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cecchini, Garin",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cecil, Brett",
          "Salary": "$3,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ceciliani, Darrell",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cedeno, Xavier",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cervelli, Francisco",
          "Salary": "$3,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cespedes, Yoenis",
          "Salary": "$20,833,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cessa, Luis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chafin, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chapman, Aroldis",
          "Salary": "$11,325,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chapman, Kevin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chargois, J.T.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chatwood, Tyler",
          "Salary": "$1,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chavez, Jesse",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chen, Wei-Yin",
          "Salary": "$8,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chirinos, Robinson",
          "Salary": "$1,550,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Chisenhall, Lonnie",
          "Salary": "$2,725,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Choi, Ji-Man",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Choo, Shin-Soo",
          "Salary": "$20,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cingrani, Tony",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cishek, Steve",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Claudio, Alex",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Clevenger, Steve",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Clevinger, Mike",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Clippard, Tyler",
          "Salary": "$6,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cobb, Alex",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Coghlan, Chris",
          "Salary": "$4,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Colabello, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cole, A.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cole, Gerrit",
          "Salary": "$541,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Coleman, Louis",
          "Salary": "$750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Collins, Tim",
          "Salary": "$1,475,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Collins, Tyler",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Collmenter, Josh",
          "Salary": "$1,850,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Colome, Alex",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Colon, Bartolo",
          "Salary": "$7,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Colon, Christian",
          "Salary": "$518,425",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Conforto, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Conger, Hank",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Conley, Adam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Contreras, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Contreras, Willson",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cook, Ryan",
          "Salary": "$1,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cooney, Tim",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Corbin, Patrick",
          "Salary": "$2,525,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cordero, Jimmy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Correa, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cosart, Jarred",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cotham, Caleb",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cotton, Jharel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cowart, Kaleb",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cowgill, Collin",
          "Salary": "$1,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Coyle, Sean",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cozart, Zack",
          "Salary": "$2925000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Craig, Allen",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cravy, Tyler",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Crawford, Brandon",
          "Salary": "$6,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Crawford, Carl",
          "Salary": "$21,607,143",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Crick, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Crisp, Covelli",
          "Salary": "$11,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Crockett, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cron, C.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cruz, Nelson",
          "Salary": "$14,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cruz, Tony",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cueto, Johnny",
          "Salary": "$$$15,833,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cunningham, Todd",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Cuthbert, Cheslor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "d'Arnaud, Travis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Danks, John",
          "Salary": "$15,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Darvish, Yu",
          "Salary": "$10,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davidson, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davies, Zach",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davis, Chris",
          "Salary": "$21,118,782",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davis, Khris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davis, Rajai",
          "Salary": "$5,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davis, Rookie",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Davis, Wade",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "De Aza, Alejandro",
          "Salary": "$5,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "De Fratus, Justin",
          "Salary": "$750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "De La Rosa, Jorge",
          "Salary": "$12,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "De La Rosa, Rubby",
          "Salary": "$2,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "De Los Santos, Abel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dean, Pat",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "deGrom, Jacob",
          "Salary": "$607,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "DeJesus Jr., Ivan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Delabar, Steve",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Delgado, Randall",
          "Salary": "$1,275,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "den Dekker, Matt",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Descalso, Daniel",
          "Salary": "$2,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "DeSclafani, Anthony",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "DeShields Jr., Delino",
          "Salary": "$517,130",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Desmond, Ian",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Despaigne, Odrisamer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Diaz, Aledmys",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Diaz, Elias",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Diaz, Jairo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Diaz, Jumbo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dickerson, Alex",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dickerson, Corey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dickey, R.A.",
          "Salary": "$12,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Diekman, Jake",
          "Salary": "$1,255,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dietrich, Derek",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Difo, Wilmer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dominguez, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Donaldson, Josh",
          "Salary": "$11,650,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Doolittle, Sean",
          "Salary": "$1,580,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Doubront, Felix",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dozier, Brian",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dragmire, Brady",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Drake, Oliver",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Drew, Stephen",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Drury, Brandon",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duda, Lucas",
          "Salary": "$6,725,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duffey, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duffy, Danny",
          "Salary": "$4,225,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duffy, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duffy, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duke, Zach",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dull, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dunn, Michael",
          "Salary": "$3,450,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duran, Juan",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Duvall, Adam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dyson, Jarrod",
          "Salary": "$1,725,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Dyson, Sam",
          "Salary": "$525,270",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Eaton, Adam",
          "Salary": "$2,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Edgin, Josh",
          "Salary": "$625,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Edwards, Carl",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Edwards, Jon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Eibner, Brett",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Eickhoff, Jerad",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Elias, Roenis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ellington, Brian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ellis, A.J.",
          "Salary": "$4,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ellsbury, Jacoby",
          "Salary": "21,142,857",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Encarnacion, Edwin",
          "Salary": "$10,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Eovaldi, Nate",
          "Salary": "$5,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Erlin, Robbie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Esch, Jacob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Escobar, Alcides",
          "Salary": "$5,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Escobar, Eduardo",
          "Salary": "$2,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Escobar, Edwin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Escobar, Yunel",
          "Salary": "$7,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Espinosa, Danny",
          "Salary": "$2,875,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Estevez, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Estrada, Marco",
          "Salary": "$11,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ethier, Andre",
          "Salary": "$18,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Familia, Jeurys",
          "Salary": "$4,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Faria, Jacob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Farmer, Buck",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Farquhar, Danny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Faulkner, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Featherston, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Feldman, Scott",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Feliz, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Feliz, Neftali",
          "Salary": "$3,900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fernandez, Jose",
          "Salary": "$2,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ferrell, Jeff",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fielder, Prince",
          "Salary": "$24,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fields, Daniel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fields, Josh",
          "Salary": "$900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fien, Casey",
          "Salary": "$2,275,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fiers, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Finnegan, Brandon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fister, Doug",
          "Salary": "$7,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Flaherty, Ryan",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Flores, Kendry",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Flores, Ramon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Flores, Wilmer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Florimon Jr, Pedro",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Flowers, Tyler",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Floyd, Gavin",
          "Salary": "1,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Flynn, Brian",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Foltynewicz, Mike",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fontana, Nolan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Forsythe, Logan",
          "Salary": "$2,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fowler, Dexter",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Franco, Maikel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Franklin, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Frazier, Todd",
          "Salary": "$8,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Freeman, Freddie",
          "Salary": "$12,359,375",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Freeman, Sam",
          "Salary": "$520,700",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Frias, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fuentes, Reymond",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fuld, Sam",
          "Salary": "$1,925,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Fulmer, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Furbush, Charlie",
          "Salary": "$1,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gallardo, Yovani",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gallo, Joey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Galvis, Freddy",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gamel, Ben",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gant, John",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Adonis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Anthony",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Avisail",
          "Salary": "$2,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Greg",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Jaime",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Jarlin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Jason",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Leury",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Luis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Willy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garcia, Yimi",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gardeck, Ian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gardner, Brett",
          "Salary": "$13,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garneau, Dustin",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garrett, Amir",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Garza, Matt",
          "Salary": "$12,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gattis, Evan",
          "Salary": "$3,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gausman, Kevin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gearrin, Cory",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Geltz, Steve",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gennett, Scooter",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gentry, Craig",
          "Salary": "$1,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Giavotella, Johnny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gibson, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Giles, Ken",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gillespie, Cole",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gilmartin, Sean",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gimenez, Chris",
          "Salary": "$975,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Givens, Mychal",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Glasnow, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Godley, Zack",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goebbert, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goeddel, Erik",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goeddel, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goforth, David",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goins, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goldschmidt, Paul",
          "Salary": "$5,850,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gomes, Yan",
          "Salary": "$2,583,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gomez, Carlos",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gomez, Jeanmar",
          "Salary": "$1,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzales, Marco",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Adrian",
          "Salary": "$21,857,143",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Alfredo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Carlos",
          "Salary": "17,428,571",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Chi Chi",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Erik",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Gio",
          "Salary": "$12,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Marwin",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Miguel",
          "Salary": "$5,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gonzalez, Severino",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goodwin, Brian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Goody, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gordon, Alex",
          "Salary": "$12,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gordon, Dee",
          "Salary": "$3,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gore, Terrance",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gose, Anthony",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gosewisch, Tuffy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gosselin, Phil",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gott, Trevor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Grace, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Graham, J.R.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Grandal, Yasmani",
          "Salary": "$2,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Granderson, Curtis",
          "Salary": "$16,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Graveman, Kendall",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gray, Jonathan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gray, Sonny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Greene, Shane",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gregerson, Luke",
          "Salary": "$6,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gregorio, Joan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gregorius, Didi",
          "Salary": "$2,425,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Greinke, Zack",
          "Salary": "$34,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Grichuk, Randal",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Grilli, Jason",
          "Salary": "$3,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Grimm, Justin",
          "Salary": "$1,275,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gsellman, Robert",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guaipe, Mayckol",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guerra, Deolis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guerra, Junior",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guerrero, Alexander",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guerrero, Gabby",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guerrero, Tayron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guerrieri, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gustave, Jandel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gutierrez, Franklin",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Guyer, Brandon",
          "Salary": "$1,185,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Gyorko, Jedd",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hahn, Jesse",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hale, David",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Haley, Trey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hall, Cody",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hamels, Cole",
          "Salary": "$23,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hamilton, Billy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hamilton, Josh",
          "Salary": "$28,410,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hammel, Jason",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hand, Brad",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hanigan, Ryan",
          "Salary": "$3,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hanson, Alen",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Happ, J.A.",
          "Salary": "$10,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hardy, Blaine",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hardy, J.J.",
          "Salary": "$12,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Harper, Bryce",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Harris, Mitch",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Harris, Will",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Harrison, Josh",
          "Salary": "$5,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Harrison, Matt",
          "Salary": "$13,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Harvey, Matt",
          "Salary": "$4,325,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hatcher, Chris",
          "Salary": "$1,065,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Headley, Chase",
          "Salary": "$13,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Heaney, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Heathcott, Slade",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hechavarria, Adeiny",
          "Salary": "$2,625,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hedges, Austin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hellickson, Jeremy",
          "Salary": "$7,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hembree, Heath",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hendricks, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hendriks, Liam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Heredia, Guillermo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hernandez, Cesar",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hernandez, David",
          "Salary": "$3,900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hernandez, Enrique",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hernandez, Felix",
          "Salary": "$25857143",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hernandez, Marco",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hernandez, Oscar",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Herrera, Dilson",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Herrera, Kelvin",
          "Salary": "$2,550,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Herrera, Odubel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Herrmann, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hessler, Keith",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Heston, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Heyward, Jason",
          "Salary": "$17,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hicks, Aaron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hicks, John",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hill, Aaron",
          "Salary": "$12,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hill, Rich",
          "Salary": "$6,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hinojosa, Dalier",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hochevar, Luke",
          "Salary": "$5,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Holaday, Bryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Holdzkom, John",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Holland, Derek",
          "Salary": "$10,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hollands, Mario",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Holliday, Matt",
          "Salary": "$17,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Holt, Brock",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Holt, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hoover, J.J.",
          "Salary": "$1,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hosmer, Eric",
          "Salary": "$8,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "House, T.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Houser, Adrian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Howard, Ryan",
          "Salary": "$25,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Howell, J.P.",
          "Salary": "$6,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hudson, Daniel",
          "Salary": "$2,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hughes, Jared",
          "Salary": "$2,175,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hughes, Phil",
          "Salary": "$9,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hundley, Nick",
          "Salary": "$3,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hunter, Tommy",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Hutchison, Drew",
          "Salary": "$2,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Iannetta, Chris",
          "Salary": "$4,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Iglesias, Jose",
          "Salary": "$2,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Iglesias, Raisel",
          "Salary": "$3,214,286",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Inciarte, Ender",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Infante, Omar",
          "Salary": "$7,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Iwakuma, Hisashi",
          "Salary": "$11,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jackson, Austin",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jackson, Edwin",
          "Salary": "$13,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jackson, Luke",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jankowski, Travis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jansen, Kenley",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jaso, John",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jay, Jon",
          "Salary": "$6,850,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jeffress, Jeremy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jenkins, Tyrell",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jennings, Dan",
          "Salary": "$810,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jennings, Desmond",
          "Salary": "$3,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jepsen, Kevin",
          "Salary": "$$5,312,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jerez, Williams",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jimenez, A.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jimenez, Ubaldo",
          "Salary": "$13,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Brian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Chris",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Erik",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Jim",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Kelly",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Micah",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Pierce",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Johnson, Stephen",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jokisch, Eric",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jones, Adam",
          "Salary": "$16,333,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jones, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jones, Nate",
          "Salary": "$900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jones, Zach",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jordan, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Joseph, Caleb",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Jungmann, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kahnle, Tommy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kang, Jung-Ho",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Karns, Nate",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kazmir, Scott",
          "Salary": "$12,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kela, Keone",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kelley, Shawn",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kelly, Casey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kelly, Joe",
          "Salary": "$2,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kemp, Matt",
          "Salary": "$21,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kendrick, Howie",
          "Salary": "$10000000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kennedy, Ian",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kepler, Max",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kershaw, Clayton",
          "Salary": "$34,571,429",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Keuchel, Dallas",
          "Salary": "$7,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kieboom, Spencer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kiekhefer, Dean",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kiermaier, Kevin",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kim, Hyun-soo",
          "Salary": "$2,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kimbrel, Craig",
          "Salary": "$11,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kingham, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kinsler, Ian",
          "Salary": "$14,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kipnis, Jason",
          "Salary": "$6,166,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kivlehan, Patrick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Klein, Phil",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kluber, Corey",
          "Salary": "$4,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Knebel, Corey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Koch, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Koehler, Tom",
          "Salary": "$3,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kontos, George",
          "Salary": "$1,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Krol, Ian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Kubitza, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "La Stella, Tommy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Labourt, Jairo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lackey, John",
          "Salary": "$16,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ladendorf, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lagares, Juan",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lake, Junior",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lamb, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lamb, John",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lambo, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Landa, Yorman",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "LaRoche, Adam",
          "Salary": "$13,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Latos, Mat",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Law, Derek",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lawrie, Brett",
          "Salary": "$4,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Layne, Tommy",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lazo, Raudel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Leake, Mike",
          "Salary": "$12,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Leclerc, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lee, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lee, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lee, Zach",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "LeMahieu, D.J.",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Leon, Arnold",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Leone, Dominic",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lester, Jon",
          "Salary": "$25,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lewis, Colby",
          "Salary": "$6,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Liberatore, Adam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Light, Pat",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lind, Adam",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lindgren, Jacob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lindor, Francisco",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Liriano, Francisco",
          "Salary": "$13,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Liriano, Rymer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lobaton, Jose",
          "Salary": "$1,387,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lobstein, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Locke, Jeff",
          "Salary": "$3,025,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Logan, Boone",
          "Salary": "$6,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Loney, James",
          "Salary": "$9,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Longoria, Evan",
          "Salary": "$12,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lopez, Javier",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lopez, Jorge",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lorenzen, Michael",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Loup, Aaron",
          "Salary": "$1,050,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lowe, Mark",
          "Salary": "$5,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lowrie, Jed",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lucroy, Jonathan",
          "Salary": "$4,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lugo, Seth",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lyles, Jordan",
          "Salary": "$2,975,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lynn, Lance",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Lyons, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Machado, Dixon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Machado, Manny",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Madson, Ryan",
          "Salary": "$6,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Maeda, Kenta",
          "Salary": "$3,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Magnifico, Damien",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mahtook, Mikie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Maile, Luke",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Maldonado, Martin",
          "Salary": "$1,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Maness, Seth",
          "Salary": "$1,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Manship, Jeff",
          "Salary": "$760,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Margot, Manuel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mariot, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marisnick, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Markakis, Nick",
          "Salary": "$11,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marksberry, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marquez, German",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marrero, Deven",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marshall, Evan",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marte, Jefry",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marte, Ketel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Marte, Starling",
          "Salary": "$3,333,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martin, Cody",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martin, Josh",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martin, Leonys",
          "Salary": "$4,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martin, Rafael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martin, Russell",
          "Salary": "$15,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martinez, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martinez, J.D.",
          "Salary": "$6,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martinez, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martinez, Nick",
          "Salary": "$519,190",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Martinez, Victor",
          "Salary": "$18,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mathis, Jeff",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Matusz, Brian",
          "Salary": "$3,900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Matz, Steven",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Matzek, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mauer, Joe",
          "Salary": "$23,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Maurer, Brandon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "May, Trevor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Maybin, Cameron",
          "Salary": "$8,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mazara, Nomar",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mazzoni, Cory",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McAllister, Zach",
          "Salary": "$1,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McCann, Brian",
          "Salary": "$$17,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McCann, James",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McCarthy, Brandon",
          "Salary": "$12,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McCullers Jr., Lance",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McCutchen, Andrew",
          "Salary": "$13,208,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McFarland, Blake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McFarland, T.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McGee, Jake",
          "Salary": "$4,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McGough, Scott",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McHugh, Collin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "McKirahan, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Medlen, Kris",
          "Salary": "$5,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mejia, Adalberto",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mejia, Jenrry",
          "Salary": "$2,470,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Melancon, Mark",
          "Salary": "$9,650,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Melotakis, Mason",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mendez, Yohander",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mercer, Jordy",
          "Salary": "$2,075,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Merritt, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mesoraco, Devin",
          "Salary": "$5,025,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Meyer, Alex",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Miley, Wade",
          "Salary": "$6,166,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Miller, Andrew",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Miller, Brad",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Miller, Justin",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Miller, Shelby",
          "Salary": "$4,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mills, Alec",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Milone, Tom",
          "Salary": "$4,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Minaya, Juan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Minor, Mike",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mitchell, Bryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Molina, Yadier",
          "Salary": "$14,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Mondesi, Raul Adalberto",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Montas, Frankie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Montero, Jesus",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Montero, Miguel",
          "Salary": "$14,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Montero, Rafael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Montgomery, Mike",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moore, Matt",
          "Salary": "$5,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moore, Tyler",
          "Salary": "$900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morales, Kendrys",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moreland, Mitch",
          "Salary": "$5,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morgan, Adam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morimando, Shawn",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morin, Mike",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moroff, Max",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morris, Akeel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morris, Bryan",
          "Salary": "$$1,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morrison, Logan",
          "Salary": "$4,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morse, Michael",
          "Salary": "$8,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Morton, Charlie",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moscot, Jon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moss, Brandon",
          "Salary": "$8,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Motte, Jason",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Motter, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moustakas, Mike",
          "Salary": "$5,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Moya, Steven",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Muncy, Max",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Murphy, Daniel",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Murphy, John Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Murphy, Tom",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Murray, Colton",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Musgrove, Joe",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Myers, Wil",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Napoli, Mike",
          "Salary": "$7,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Naquin, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nava, Daniel",
          "Salary": "$1,375,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Navarro, Dioner",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Navarro, Rey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nelson, Jimmy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Neris, Hector",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nesbitt, Angel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Neshek, Pat",
          "Salary": "$6,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ngoepe, Gift",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nicasio, Juan",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nicolino, Justin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Niese, Jon",
          "Salary": "$9,050,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nieuwenhuis, Kirk",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nimmo, Brandon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nola, Aaron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nolasco, Ricky",
          "Salary": "$12,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nolin, Sean",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Norris, Bud",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Norris, Daniel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Norris, Derek",
          "Salary": "$2,925,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nova, Ivan",
          "Salary": "$4,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nunez, Eduardo",
          "Salary": "$1,475,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nunez, Renato",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Nuno, Vidal",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "O'Brien, Pete",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "O'Conner, Justin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "O'Day, Darren",
          "Salary": "$6,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "O'Grady, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "O'Malley, Shawn",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "O'Rourke, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Oberg, Scott",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Oberholtzer, Brett",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Odor, Rougned",
          "Salary": "522,700",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Odorizzi, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ogando, Nefi",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Oh, Seung-hwan",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ohlman, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Okert, Steven",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Olivera, Hector",
          "Salary": "$8,666,666",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Olson, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Oretga, Rafael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Orlando, Paulo",
          "Salary": "$514,250",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ortiz, David",
          "Salary": "$16,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Osich, Josh",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Osuna, Roberto",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Otero, Danny",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ottavino, Adam",
          "Salary": "$1,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Owens, Henry",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Owings, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ozuna, Marcell",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pagan, Angel",
          "Salary": "$11,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Panik, Joe",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Papelbon, Jonathan",
          "Salary": "$11,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Paredes, Jimmy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Park, Byung Ho",
          "Salary": "$2,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Parker, Jarrett",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Parker, Jarrod",
          "Salary": "$850,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Parra, Gerardo",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Patton, Spencer",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Paulino, David",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Paulsen, Ben",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Paxton, James",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pazos, James",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peacock, Brad",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pearce, Steve",
          "Salary": "$4,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peavy, Jake",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pederson, Joc",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pedroia, Dustin",
          "Salary": "$$13,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pelfrey, Mike",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pena, Ariel",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pena, Brayan",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pena, Francisco",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pence, Hunter",
          "Salary": "$18,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pennington, Cliff",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peralta, David",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peralta, Jhonny",
          "Salary": "$12,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peralta, Wily",
          "Salary": "$2,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peraza, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perdomo, Luis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perez, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perez, Martin",
          "Salary": "$3,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perez, Oliver",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perez, Roberto",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perez, Salvador",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perez, Williams",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Perkins, Glen",
          "Salary": "$6,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Peterson, Jace",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Petit, Yusmeiro",
          "Salary": "$$$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Petricka, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pham, Tommy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Phegley, Josh",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Phelps, David",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Phillips, Brandon",
          "Salary": "$13,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Phillips, Zach",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pierzynski, A.J.",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pillar, Kevin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pinder, Branden",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pineda, Michael",
          "Salary": "4,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pirela, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Piscotty, Stephen",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Plawecki, Kevin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Plouffe, Trevor",
          "Salary": "$7,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Polanco, Gregory",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Polanco, Jorge",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pollock, A.J.",
          "Salary": "$3,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pomeranz, Drew",
          "Salary": "$1,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pompey, Dalton",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Porcello, Rick",
          "Salary": "$20,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Posey, Buster",
          "Salary": "$20,777,777",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Powell, Boog",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Prado, Martin",
          "Salary": "$11,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pressly, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Price, David",
          "Salary": "$30,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Profar, Jurickson",
          "Salary": "$605,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Puig, Yasiel",
          "Salary": "$7,214,286",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Pujols, Albert",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Putnam, Zach",
          "Salary": "$975,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Quackenbush, Kevin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Qualls, Chad",
          "Salary": "$2,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Quinn, Roman",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Quintana, Jose",
          "Salary": "$5,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Alexei",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Erasmo",
          "Salary": "$2,375,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Hanley",
          "Salary": "$22,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Harold",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Jose A.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Neil",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramirez, Noe",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramos, A.J.",
          "Salary": "$3,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramos, Edubray",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramos, Wilson",
          "Salary": "$5,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ramsey, James",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ranaudo, Anthony",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rasmus, Colby",
          "Salary": "$$15,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rasmus, Cory",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rasmussen, Rob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ravelo, Rangel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ravin, Josh",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ray, Robbie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rea, Colin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Realmuto, J.T.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reddick, Josh",
          "Salary": "$6,575,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reed, Addison",
          "Salary": "$5,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reed, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Refsnyder, Rob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reimold, Nolan",
          "Salary": "1,300,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rendon, Anthony",
          "Salary": "2,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Revere, Ben",
          "Salary": "$6,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reyes, Jose",
          "Salary": "$22,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reynolds, Danny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reynolds, Mark",
          "Salary": "$2,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reynolds, Matt",
          "Salary": "$675,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Reynolds, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Richard, Clayton",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Richards, Garrett",
          "Salary": "$6,425,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rickard, Joey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Riefenhauser, C.J.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rivera, Rene",
          "Salary": "$1,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rivera, Yadiel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rivero, Felipe",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rizzo, Anthony",
          "Salary": "$5,285,714",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Roark, Tanner",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Robertson, David",
          "Salary": "$11,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Robertson, Montreal",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Robinson, Clint",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Robles, Hansel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodney, Fernando",
          "Salary": "$1,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodon, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Alex",
          "Salary": "$21,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Eduardo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Fernando",
          "Salary": "$1,050,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Francisco",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Paco",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Sean",
          "Salary": "$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rodriguez, Yorman",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Roe, Chaz",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rogers, Jason",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rogers, Taylor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rojas, Miguel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rollins, David",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Romano, Sal",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Romero, Enny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Romero, Stefen",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Romine, Andrew",
          "Salary": "$900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Romine, Austin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Romo, Sergio",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rondon, Bruce",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rondon, Hector",
          "Salary": "$$$4,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rondon, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rosario, Eddie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rosario, Randy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rosenthal, Trevor",
          "Salary": "$5,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ross, David",
          "Salary": "$$2,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ross, Joe",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ross, Robbie",
          "Salary": "$1,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ross, Tyson",
          "Salary": "$9,625,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rosscup, Zac",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rowen, Ben",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rua, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ruf, Darin",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ruggiano, Justin",
          "Salary": "$1,650,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ruiz, Carlos",
          "Salary": "$8,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rumbelow, Nick",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rupp, Cameron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rusin, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Russell, Addison",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rutckyj, Evan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ryan, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ryu, Hyun-Jin",
          "Salary": "$7,833,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Rzepczynski, Marc",
          "Salary": "2,950,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sabathia, CC",
          "Salary": "$25,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sadzeck, Connor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Saladino, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Salas, Fernando",
          "Salary": "$2,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Salazar, Danny",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sale, Chris",
          "Salary": "$9,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Saltalamacchia, Jarrod",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Samardzija, Jeff",
          "Salary": "$10,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sampson, Keyvius",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sanchez, Aaron",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sanchez, Anibal",
          "Salary": "$16,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sanchez, Carlos",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sanchez, Gary",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sandoval, Pablo",
          "Salary": "$17,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sands, Jerry",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sano, Miguel Jean",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Santana, Carlos",
          "Salary": "$8,450,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Santana, Danny",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Santana, Domingo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Santana, Ervin",
          "Salary": "$13,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Santiago, Hector",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sardinas, Luis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Saunders, Michael",
          "Salary": "$2900000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Scahill, Rob",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Schebler, Scott",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Scheppers, Tanner",
          "Salary": "$900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Scherzer, Max",
          "Salary": "$22,142,857",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Schoop, Jonathan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Schultz, Bo",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Schwarber, Kyle",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Scribner, Evan",
          "Salary": "$807,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Seager, Corey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Seager, Kyle",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Segura, Jean",
          "Salary": "$2,600,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Semien, Marcus",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Senzatela, Antonio",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Severino, Luis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Severino, Pedro",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shaffer, Richie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shaw, Bryan",
          "Salary": "$2,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shaw, Travis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shields, James",
          "Salary": "$21,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shoemaker, Matt",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shreve, Chasen",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Shuck, J.B.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Siegrist, Kevin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sierra, Yaisel",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Simmons, Andrelton",
          "Salary": "$6,142,857",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Simmons, Shae",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Singleton, Jonathan",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sipp, Tony",
          "Salary": "$6,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Skaggs, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Skipworth, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Blake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Carson",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Joe",
          "Salary": "$5,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Kevan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Mallex",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Seth",
          "Salary": "$6,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smith, Will",
          "Salary": "$1,475,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smoak, Justin",
          "Salary": "$3,900,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smoker, Josh",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smolinski, Jake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Smyly, Drew",
          "Salary": "$3,750,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Snell, Blake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Socolovich, Miguel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sogard, Eric",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Solarte, Yangervis",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Soler, Jorge",
          "Salary": "$3,666,667",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Solis, Sammy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Soria, Joakim",
          "Salary": "7,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Soto, Geovany",
          "Salary": "$2,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Soto, Giovanni",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Souza, Steven",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Span, Denard",
          "Salary": "$5,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Spangenberg, Cory",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Springer, George",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stanton, Giancarlo",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Starling, Bubba",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stassi, Max",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stephenson, Robert",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stewart, Chris",
          "Salary": "$1,350,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Storen, Drew",
          "Salary": "$8,375,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Story, Trevor",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Strahm, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Straily, Dan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Strasburg, Stephen",
          "Salary": "$10,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stratton, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Street, Huston",
          "Salary": "$8,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Strickland, Hunter",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stripling, Ross",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stroman, Marcus",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Strong, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Strop, Pedro",
          "Salary": "$4,400,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Stumpf, Daniel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Suarez, Eugenio",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sucre, Jesus",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Susac, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Suzuki, Ichiro",
          "Salary": "2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Suzuki, Kurt",
          "Salary": "$6,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Sweeney, Darnell",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Swihart, Blake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Swisher, Nick",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Syndergaard, Noah",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Szczur, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Taillon, Jameson",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tanaka, Masahiro",
          "Salary": "$22,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tapia, Raimel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Taylor, Chris",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Taylor, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tazawa, Junichi",
          "Salary": "$3,375,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Teheran, Julio",
          "Salary": "$3,466,666",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Teixeira, Mark",
          "Salary": "$23,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tejada, Ruben",
          "Salary": "$3,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Telis, Tomas",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tepera, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Thole, Josh",
          "Salary": "$800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Thomas, Ian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Thompson, Trayce",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Thornburg, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tillman, Chris",
          "Salary": "$6225000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tilson, Charlie",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tolleson, Shawn",
          "Salary": "$3,275,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tomas, Yasmany",
          "Salary": "$7,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tomlin, Josh",
          "Salary": "$2,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tomlinson, Kelby",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tonkin, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Torres, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Torres, Ramon",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Torreyes, Ronnie",
          "Salary": "$507500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Travis, Devon",
          "Salary": "507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Treinen, Blake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Triggs, Andrew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tropeano, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Trout, Mike",
          "Salary": "$16,083,333",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Trumbo, Mark",
          "Salary": "$9,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tucker, Preston",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tuivailala, Sam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Tulowitzki, Troy",
          "Salary": "$20,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Turner, Jacob",
          "Salary": "$1,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Turner, Justin",
          "Salary": "$5,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Turner, Trea",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Uehara, Koji",
          "Salary": "$9,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Upton, Justin",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Upton, Melvin Jr.",
          "Salary": "$16,050,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Urena, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Uribe, Juan",
          "Salary": "$4,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Urrutia, Henry",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Urshela, Giovanny",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Utley, Chase",
          "Salary": "$7,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Valbuena, Luis",
          "Salary": "$6,125,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Valdez, Jose",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Valencia, Danny",
          "Salary": "$3,150,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Van Slyke, Scott",
          "Salary": "$1,225,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vargas, Cesar",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vargas, Jason",
          "Salary": "no salary data",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vargas, Kennys",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vazquez, Christian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Velasquez, Vincent",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Venditte, Pat",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ventura, Yordano",
          "Salary": "$1200000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "VerHagen, Drew",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Verlander, Justin",
          "Salary": "$28,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Verrett, Logan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Villanueva, Carlos",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Villanueva, Christian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Villar, Jonathan",
          "Salary": "$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vincent, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vizcaino, Arodys",
          "Salary": "$897,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vogelbach, Dan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vogelsong, Ryan",
          "Salary": "$2,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Vogt, Stephen",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Volquez, Edinson",
          "Salary": "$9,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Votto, Joey",
          "Salary": "$20,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wacha, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wagner, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wainwright, Adam",
          "Salary": "$19,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walden, Jordan",
          "Salary": "$3,675,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Waldrop, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walker, Adam",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walker, Christian",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walker, Neil",
          "Salary": "$10,550,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walker, Taijuan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wallace, Brett",
          "Salary": "$1000000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walsh, Colin",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walters, Jeff",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Walters, Zach",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Warren, Adam",
          "Salary": "$1,700,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Watson, Tony",
          "Salary": "$3,450,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Weaver, Jered",
          "Salary": "$20,200,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Webb, Daniel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Webb, Ryan",
          "Salary": "$1,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Weber, Ryan",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wendelken, J.B.",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wendle, Joey",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Werth, Jayson",
          "Salary": "$21,571,429",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wheeler, Zack",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Whitley, Chase",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wieland, Joe",
          "Salary": "$590,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wieters, Matt",
          "Salary": "$15,800,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wilhelmsen, Tom",
          "Salary": "$3,100,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wilkins, Andy",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Williams, Mason",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Williamson, Mac",
          "Salary": "",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wilson, Alex",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wilson, C.J.",
          "Salary": "$20,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wilson, Justin",
          "Salary": "$1,525,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wilson, Tyler",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Winkler, Daniel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wisler, Matt",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Withrow, Chris",
          "Salary": "$610,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wittgren, Nick",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wojciechowski, Asher",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wolters, Tony",
          "Salary": "$$$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wong, Kolten",
          "Salary": "$1,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wood, Alex",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wood, Blake",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wood, Travis",
          "Salary": "$6,170,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Workman, Brandon",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Worley, Vance",
          "Salary": "$2600000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wright, David",
          "Salary": "$20,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wright, Mike",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Wright, Steve",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Yates, Kirby",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Yelich, Christian",
          "Salary": "$1,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ynoa, Gabriel",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ynoa, Michael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ynoa, Rafael",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Young, Chris",
          "Salary": "$6,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Young, Chris",
          "Salary": "$4,250,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Ziegler, Brad",
          "Salary": "$5,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Zimmer, Kyle",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Zimmerman, Ryan",
          "Salary": "$14,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Zimmermann, Jordan",
          "Salary": "$18,000,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Zobrist, Ben",
          "Salary": "$10,500,000",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Zunino, Mike",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        },
        {
          "Player": "Zych, Tony",
          "Salary": "$507,500",
          "Year": 2016,
          "Level": "MLB"
        }
      ],
      avg: 0
    };
  }
componentDidMount() {
  this.calculateOffer()
   }

calculateOffer = () => {
let array = [];
//iterates through data and extracts what is needed
 this.state.data.map((data, i) => {
   let removeComma = data.Salary.replaceAll(',', '')
   let val = removeComma.replaceAll('$', '')
   let isnum = val.match(/^[0-9]+$/) != null;
   if(isnum === true){
     array.push(parseInt(val), i);
   }
  })
//sets new array and orders from largest to smallest number
  let numArray = array;
  numArray.sort(function(b, a) {
    return a - b;
  });
//adjust array to only have top 125 numbers
  let topSalary = numArray.slice(0, 125)
  let total = 0;
//iterates through data and adds all numbers and sets to total variable
  for(let i = 0; i < topSalary.length; i++) {
      total += topSalary[i];
  }
//divides total variable by lenght of the array
  let avg = total / topSalary.length;
//sets state so information can be viewed 
  this.setState({avg: avg})
}
      render() {
        return (
          <div>
            ${this.state.avg}
          </div>
        );
      }
}

export default App;
