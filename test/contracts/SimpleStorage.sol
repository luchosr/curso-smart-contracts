pragma solidity ^0.4.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        require(x<10);
         //require es una palabra reservada que dice que si no se cumple la condicion el contrato se revierte.
         // Si una transaccion se revierte no es costo para nadie.
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}