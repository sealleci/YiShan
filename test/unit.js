import { GeneralVector, FLAT_HEXAGON_DIRECTION_VECTORS } from '../js/hex.js'
import { FlatHexagonDirection, PlantTagCategory } from '../js/enum.js'
import { PlantTag } from '../js/tag.js'
import { exit } from 'process';

function log(text) {
    console.log(`@test.unit> ${text}`)
}

(async () => {
    try {
        let d = FLAT_HEXAGON_DIRECTION_VECTORS[FlatHexagonDirection.BOTTOM]
        let v1 = new GeneralVector(1, 2, 3)
        let v2 = new GeneralVector(4, 5, 6)
        let tag = new PlantTag('被子', PlantTagCategory.CLASSIFACATION)
        tag.attach('单子叶').attach('泽泻')
        log(tag.name_keys.join('.'))

        // log(d.toString())
        // log(v1.add(v2).toString())
        // log(v1.scale(0.5).toString())
        // log(v1.dot(v2))
        // log(v1.cross(v2).toString())
        // log(v1.isEqualTo(v2))
        // log(v1.getNorm())
        // log(v1.normalize().toString())
        // log(v1.id)
        // log(v1.toString())
    } catch (err) {
        console.log(`@test.unit: Terminate with error \"${err}\".`)
        exit(1);
    } finally {
        console.log(`@test.unit: Pass all cases.`)
    }
})();