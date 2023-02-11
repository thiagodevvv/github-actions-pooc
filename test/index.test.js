
const assert = require("assert")

async function functionPromisy() {

}
jest.setTimeout(100000)
describe("#suite de testes", () => {
    it("#teste 1", async () => {

        async function functionPromisy() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 10000)
            })
        }
        const response = await functionPromisy()
        assert.ok(response)
    })
    it("#teste 2", async () => {
        async function functionPromisy() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 15000)
            })
        }
        const response = await functionPromisy()
        assert.ok(response)
    })
    it("#teste 3", async () => {
        async function functionPromisy() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 20000)
            })
        }
        const response = await functionPromisy()
        assert.ok(response)
    })
    it("#teste 4", async () => {
        async function functionPromisy() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 10000)
            })
        }
        const response = await functionPromisy()
        assert.ok(response)
    })
})