import { log, assert, conduct, getUUID } from '../js/util.js'
import { GeneralVector, FLAT_HEXAGON_DIRECTION_VECTORS } from '../js/hex.js'
import { FlatHexagonDirection, PlantTagCategory } from '../js/enum.js'
import { PlantTag } from '../js/tag.js'
import { exit } from 'process';


function testVector() {
    let d = FLAT_HEXAGON_DIRECTION_VECTORS[FlatHexagonDirection.BOTTOM]
    let v1 = new GeneralVector(1, 2, 3)
    let v2 = new GeneralVector(4, 5, 6)

    log('bottom vector', () => d.toString())
    log('vec(1,2,3)', () => v1.toString())
    log('vec(1,2,3) + vec(4,5,6)', () => v1.add(v2).toString())
    log('vec(1,2,3) * 0.5', () => v1.scale(0.5).toString())
    log('vec(1,2,3) dot vec(4,5,6)', () => v1.dot(v2))
    log('vec(1,2,3) cross vec(4,5,6)', () => v1.cross(v2).toString())
    assert('vec(1,2,3) != vec(4,5,6)', () => !v1.isEqualTo(v2))
    log('vec(1,2,3).norm', () => v1.getNorm().toFixed(2))
    log('normalize vec(1,2,3)', () => v1.normalize().toString())
    log('vec(1,2,3).id', () => v1.id)
}

function testTag() {
    let tag_1 = PlantTag.create(PlantTagCategory.CLASSIFACATION, ['被子', '单子叶', '泽泻'])
    let tag_2 = PlantTag.create(PlantTagCategory.CLASSIFACATION, ['A', 'B', 'C'])
    let tag_3 = PlantTag.create(PlantTagCategory.CLASSIFACATION, ['A', 'B', 'C'])
    let tag_4 = PlantTag.create(PlantTagCategory.CLASSIFACATION, ['A', 'B'])

    log('tag name keys', () => tag_1.name_keys.join('.'))
    assert('A.B.C == A.B.C', () => tag_2.isEqualTo(tag_3))
    assert('A.B.C != A.B', () => !tag_2.isEqualTo(tag_4))
    assert('A.B.C from A.B', () => tag_2.isDeriviedFrom(tag_4))
    assert('A.B.C from A.B.C', () => tag_2.isDeriviedFrom(tag_3))
    assert('A.B not from A.B.C', () => !tag_4.isDeriviedFrom(tag_2))
}

function testUtil() {
    for (let i = 0; i < 100; i += 1) {
        log('uuid', getUUID)
    }
}

(async () => {
    try {
        conduct(testUtil/*, testVector, testTag*/)
    } catch (error) {
        console.log(`@test.unit: Terminate with \"${error}\".`)
        exit(1);
    } finally {
        console.log(`@test.unit: Pass all cases.`)
    }
})();