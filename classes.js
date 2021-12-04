class Materializer {
  constructor(_target) {
    this.target = _target;
    this.activated = false;
  }
  activate(){this.activated = true}
  materialize(){return (this.activated) ? this.target : undefined}
}