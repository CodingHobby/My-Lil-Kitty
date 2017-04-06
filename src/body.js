var Vector = require('./vector')

module.exports = class Body {

	/**
	 * Creates an instance of Body
	 * @param {object} opts : an object that contains diferent options for the body, such as the position, velocity and acceleration
	 */
	constructor(opts) {
		if (opts.pos) this.pos = new Vector(opts.pos.x, opts.pos.y)
		else this.pos = new Vector(0, 0)

		if (opts.vel) this.vel = new Vector(opts.vel.x, opts.vel.y)
		else this.vel = new Vector(0, 0)

		if (opts.acc) this.acc = new Vector(opts.acc.x, opts.acc.y)
		else this.acc = new Vector(0, 0)

		this.mass = opts.mass || 10
	}


	/**
	 * Applies a force to a rigid body
	 * @param {Vector} v the vector representing the force
	 * @returns {Vector} the result of the addition between the acceleration of the body and the Vector v
	 */
	applyForce(v) {
		return this.acc.add(v)
	}

	/**
	 * Updates the state of the body, in particular its acceleration, velocity and position
	 * @returns {undefined}
	 */
	update() {
		this.applyG(this.gravity)
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		this.acc.mag(0)
	}

	/**
	 * Changes the body's gravity
	 * 
	 * @param {number} mag :the magnitude of the y component ofthe rgavity force
	 * @returns {number} : the current gravity of the object
	 */
	setG(mag) {
		return this.gravity = mag || 1
	}

	/**
	 * Apply the gravity to the body, changing its acceleration
	 * 
	 * @param {Number} mag : the magnitude of the force
	 * @returns {undefined}
	 */
	applyG(mag) {
		this.applyForce(new Vector(0, this.gravity))
	}

	/**
	 * Check if the object is colliding with another object
	 * 
	 * @param {Body} obj the object to check
	 * @returns {Boolean} is the distance between the two objects less than 0?
	 */
	collides(obj) {
		return this.dist(obj) <= 0
	}

	/**
	 * Find out the distance between two bodies
	 * 
	 * @param {Body} obj the object to check
	 * @returns {Number} the distance between the two objects
	 */
	dist(obj) {
		return new Vector(this.x - obj.x, this.y - obj.y).mod
	}

	/**
	 * Change velocity based on the position of two objects
	 * Also apply friction after the inpact
	 * 
	 * @param {Body} obj the object to check
	 */

	// TODO: Make the decision for what happens based on an option (ie friction / weight of material)
	bounce(obj) {
		if (this.pos.x == obj.pos.x) {
			this.pos.x = obj.pos.x - 1
			this.vel.x *= -0.9
		}

		if (this.pos.y == obj.pos.y) {
			this.pos.y = obj.pos.y - 1
			this.vel.y *= -0.9
		}
	}

	/**
	 * Make an object bounce on the screen edges
	 * 
	 * @param {Vector} constrains
	 */

	// TODO: make the drag force based on the options
	edges(constrains) {
		if (this.pos.x > constrains.x) {
			this.pos.x = constrains.x
			this.vel.x *= -1
		} else if (this.pos.x < 0) {
			this.pos.x = 0
			this.vel.x *= -1
		}

		if (this.pos.y > constrains.y) {
			this.pos.y = constrains.y
			this.vel.y *= -1
		} else if (this.pos.y < 0) {
			this.pos.y = 0
			this.vel.y *= -1
		}
	}
}