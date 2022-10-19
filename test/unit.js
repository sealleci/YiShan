import { GeneralVector, FLAT_HEXAGON_DIRECTION_VECTORS } from '../js/hex.js'
import { FlatHexagonDirection } from '../js/enum.js'
import { exit } from 'process';

function log(text) {
    console.log(`@test.unit> ${text}`)
}

(async () => {
    try {
        let d = FLAT_HEXAGON_DIRECTION_VECTORS[FlatHexagonDirection.BOTTOM]
        let v1 = new GeneralVector(1, 2, 3)
        let v2 = new GeneralVector(4, 5, 6)

        log(d.toString())
        log(v1.add(v2).toString())
        log(v1.scale(0.5).toString())
        log(v1.dot(v2))
        log(v1.cross(v2).toString())
        log(v1.isEqualTo(v2))
        log(v1.getNorm())
        log(v1.normalize().toString())
        log(v1.getMappingId())
        log(v1.toString())
    } catch (err) {
        console.log(`@test.unit: Terminate with error \"${err}\".`)
        exit(1);
    } finally {
        console.log(`@test.unit: Pass all cases.`)
    }
})();