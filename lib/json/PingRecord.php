<?php


class PingRecord {
    use FromJson;

    /**
     * @index 0
     * @var int
     */
    public $minPing;
    /**
     * @index 1
     * @var int
     */
    public $maxPing;
    /**
     * @index 2
     * @var float
     */
    public $avgPing;
} 