/**
 * A small wireframe house on a turntable, projected to 2D for each of the
 * 150 frames of a spin. Shared by the hero demo and the social images.
 */

export const FRAMES = 150;

type Point = readonly [number, number, number];
type Edge = readonly [Point, Point];

export type View = { cx: number; cy: number; scale: number; tilt: number };

export const defaultView: View = { cx: 180, cy: 196, scale: 70, tilt: 0.42 };

const WIDTH = 1;
const DEPTH = 0.7;
const HEIGHT = 1;
const RIDGE = 1.6;

function frontRect(x0: number, x1: number, y0: number, y1: number, z: number): Edge[] {
  return [
    [[x0, y0, z], [x1, y0, z]],
    [[x1, y0, z], [x1, y1, z]],
    [[x1, y1, z], [x0, y1, z]],
    [[x0, y1, z], [x0, y0, z]],
  ];
}

function sideRect(x: number, z0: number, z1: number, y0: number, y1: number): Edge[] {
  return [
    [[x, y0, z0], [x, y0, z1]],
    [[x, y0, z1], [x, y1, z1]],
    [[x, y1, z1], [x, y1, z0]],
    [[x, y1, z0], [x, y0, z0]],
  ];
}

const EDGES: Edge[] = (() => {
  const base: Point[] = [
    [-WIDTH, 0, -DEPTH],
    [WIDTH, 0, -DEPTH],
    [WIDTH, 0, DEPTH],
    [-WIDTH, 0, DEPTH],
  ];
  const top: Point[] = base.map(([x, , z]) => [x, HEIGHT, z] as const);
  const ridgeLeft: Point = [-WIDTH, RIDGE, 0];
  const ridgeRight: Point = [WIDTH, RIDGE, 0];

  const edges: Edge[] = [];
  for (let i = 0; i < 4; i++) {
    const next = (i + 1) % 4;
    edges.push([base[i], base[next]], [top[i], top[next]], [base[i], top[i]]);
  }
  edges.push(
    [ridgeLeft, ridgeRight],
    [ridgeLeft, top[0]],
    [ridgeLeft, top[3]],
    [ridgeRight, top[1]],
    [ridgeRight, top[2]],
  );
  // Door
  edges.push(
    [[-0.16, 0, DEPTH], [-0.16, 0.56, DEPTH]],
    [[-0.16, 0.56, DEPTH], [0.16, 0.56, DEPTH]],
    [[0.16, 0.56, DEPTH], [0.16, 0, DEPTH]],
  );
  // Windows
  edges.push(
    ...frontRect(0.42, 0.76, 0.42, 0.72, DEPTH),
    ...frontRect(-0.76, -0.42, 0.42, 0.72, DEPTH),
    ...sideRect(WIDTH, -0.18, 0.18, 0.42, 0.72),
  );
  return edges;
})();

function angleOf(frame: number) {
  return (frame / FRAMES) * Math.PI * 2;
}

function ringPoint(view: View, angle: number, radius: number) {
  const x = view.cx + radius * Math.cos(angle) * view.scale;
  const y = view.cy + radius * Math.sin(angle) * Math.sin(view.tilt) * view.scale;
  return `${x.toFixed(1)} ${y.toFixed(1)}`;
}

export function housePath(frame: number, view: View = defaultView): string {
  const theta = angleOf(frame);
  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  const cosP = Math.cos(view.tilt);
  const sinP = Math.sin(view.tilt);

  const project = ([x, y, z]: Point) => {
    const xr = x * cosT + z * sinT;
    const zr = -x * sinT + z * cosT;
    const yr = y * cosP - zr * sinP;
    return `${(view.cx + xr * view.scale).toFixed(1)} ${(view.cy - yr * view.scale).toFixed(1)}`;
  };

  return EDGES.map(([a, b]) => `M${project(a)}L${project(b)}`).join("");
}

/** Short accent line on the turntable that tracks the current frame. */
export function markerPath(frame: number, view: View = defaultView): string {
  const angle = Math.PI / 2 + angleOf(frame);
  return `M${ringPoint(view, angle, 1.58)}L${ringPoint(view, angle, 1.94)}`;
}

/** One tick per frame around the turntable, with a longer tick every 10 frames. */
export function ticksPath(view: View = defaultView): string {
  let path = "";
  for (let frame = 0; frame < FRAMES; frame++) {
    const angle = angleOf(frame);
    const outer = frame % 10 === 0 ? 1.82 : 1.7;
    path += `M${ringPoint(view, angle, 1.62)}L${ringPoint(view, angle, outer)}`;
  }
  return path;
}

export function turntable(view: View = defaultView) {
  return {
    cx: view.cx,
    cy: view.cy,
    rx: 1.62 * view.scale,
    ry: 1.62 * view.scale * Math.sin(view.tilt),
  };
}
