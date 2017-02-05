/*
 * Copyright (c) (2017) - Aikar's Minecraft Timings Parser
 *  
 *  Written by Aikar <aikar@aikar.co>
 *    + Contributors (See AUTHORS)
 *  
 *  http://aikar.co
 *  http://starlis.com
 *  
 *  @license MIT
 *  
 */

import JsonTemplate from "./JsonTemplate";

export default class TimingData extends JsonTemplate {

	mergedCount = 0;
	mergedLagCount = 0;
	/**
	 * @type int
	 */
	id;
	/**
	 * @type int
	 */
	count = 0;
	/**
	 * @type int
	 */
	total = 0;
	/**
	 * @type int
	 */
	lagCount = 0;
	/**
	 * @type int
	 */
	lagTotal = 0;

	addData(data) {
		this.mergedCount++;
		if (!(data instanceof TimingData)) {
			console.error(data);
		}

		this.count += data.count;
		this.total += data.total;
		if (data.lagCount) {
			this.mergedLagCount++;
			this.lagCount += data.lagCount;
			this.lagTotal += data.lagTotal;
		}
	}
}