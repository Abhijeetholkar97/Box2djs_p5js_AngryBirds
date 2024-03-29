class Obstacles {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;

    var fd = new box2d.b2FixtureDef();
    fd.shape = new box2d.b2PolygonShape();
    fd.shape.SetAsBox(scaleToWorld(this.w/2),  scaleToWorld(this.h / 2));

    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.1;

    var  bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(this.x, this.y);
    this.body = world.CreateBody(bd);

    // Attach the Fixtures
    this.body.CreateFixture(fd);
  };

  show(){
    var  pos = scaleToPixels(this.body.GetPosition());
    var  angle = this.body.GetAngleRadians();

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER)
    fill("#ffae42")
    rect(0, 0, this.w, this.h);
    pop();
  }
};
