import { GeneralVector, FLAT_HEXAGON_DIRECTION_VECTORS } from './hex.js';
import { FlatHexagonDirection } from './enum.js';
document.addEventListener('DOMContentLoaded', () => {
    function foo(y) {
        y.add(y);
    }
    let aaa = new GeneralVector(1, 2, 3);
    let bbb = new GeneralVector(6, 5, 4);
    foo(aaa);
    console.log(aaa.add(bbb).toString());
    console.log(aaa.scale(0.5).toString());
    console.log(aaa.dot(bbb));
    console.log(aaa.cross(bbb).toString());
    console.log(aaa.isEqualTo(bbb));
    console.log(aaa.getNorm());
    console.log(aaa.normalize().toString());
    console.log(aaa.getMappingId());
    console.log(aaa.toString());
    let d = FLAT_HEXAGON_DIRECTION_VECTORS[FlatHexagonDirection.BOTTOM];
    d.add(d);
});
//# sourceMappingURL=main.js.map