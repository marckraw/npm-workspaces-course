import {liba} from '@mrck-labs/lib-a'
import {noRelease} from '@mrck-labs/lib-b-non-releasable'

export const someFunc = () => {
    noRelease()
    liba()
    return "somefunc value"
}