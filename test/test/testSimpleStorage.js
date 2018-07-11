const SimpleStorage = artifacts.require("./SImpleStorage.sol"); 

contract ("SimpleStorage", function(accounts){
    let contract;
    let Alice = accounts[0];
    let Bob = accounts[1];

    beforeEach("setup contract for each test", async function(){
        contract = await SimpleStorage.new({from: Bob});
    });

    describe("General test of contracts", function(){
        it("should set a value", async function(){
            let tx = await contract.set(10);
            assert.equal(await contract.get(), 10,"no son iguales");
        });
    });
});