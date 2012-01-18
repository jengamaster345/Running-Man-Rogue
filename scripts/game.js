/* Copyright (C) 2012 Matthew Roe & Criostóir Brennan                    **

**                                                                       **

** This program is licensed under the GPLv3.                             **

** The full license can be found at http://www.gnu.org/licenses/gpl.html */



var canvas, context;



var Game = function() {

    this.frame  = 0;

	this.isInit = false;



	this.init = function() {

		this.isInit = true;



		setInterval(Game.tick, 250);

	};



	this.tick = function() {

		++this.frame;

	};

};