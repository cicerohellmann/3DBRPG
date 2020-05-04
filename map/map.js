class Map {
    constructor(s_, o_, q_, z_, a_, w_, x_, d_, i_, e_){
        this.s = s_;
        this.o = o_;
        this.q = q_;
        this.z = z_;
        this.a = a_;
        this.w = w_;
        this.x = x_;
        this.d = d_;
        this.i = i_;
        this.e = e_;
    	  var s = s_;
        var o = o_;
        var q = q_;
        var z = z_; 
        var a = a_;
        var w = w_;
        var x = x_;
        var d = d_; 
        var i = i_;
        var e = e_;
        //movimentation map
        this.floor = [
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, q, w, w, z, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, q, w, w, q, s, s, s, s, z, w, w, w, w, w, w, w, w, w, w, w],
          [q, s, s, s, s, s, s, s, s, a, s, s, s, s, s, s, s, s, s, s, a],
          [a, s, s, s, s, s, s, s, s, d, s, s, s, s, s, s, s, s, s, s, a],
          [a, s, s, s, s, s, s, s, s, d, s, s, s, s, s, s, s, s, s, s, a],
          [z, s, s, s, s, s, s, s, s, a, s, s, s, s, s, s, s, s, s, s, a],
          [o, z, x, x, z, s, s, s, s, q, x, x, x, x, x, x, x, x, x, x, x],
          [o, o, o, o, o, z, x, x, q, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o]
          ];

        //second layer for all objects and enemies
        this.things = [
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, q, w, w, z, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, q, w, w, q, s, s, s, s, z, w, w, w, w, w, w, w, w, w, w, w],
          [q, s, s, s, s, s, s, s, s, a, s, s, s, s, s, s, s, s, s, s, a],
          [a, s, s, s, s, s, s, i, s, d, s, s, s, s, s, s, s, s, s, s, a],
          [a, s, s, s, s, s, s, s, s, d, s, s, s, s, s, s, s, s, s, s, a],
          [z, s, s, s, s, s, s, s, s, a, s, s, e, s, s, s, s, s, s, s, a],
          [o, z, x, x, z, s, s, s, s, q, x, x, x, x, x, x, x, x, x, x, x],
          [o, o, o, o, o, z, x, x, q, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o]
          ];
    }
}
