import React, { useState, useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { ethers } from "ethers";
import TokensContext from "../state/TokensContext";
import "../styles/faucet.scss";
import { isValidAddress } from "../utils/utils";

const Faucet = () => {
  const tokens = useContext(TokensContext);
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  const onChangeWallet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const printDAI = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (tokens) {
      const validAddress = await isValidAddress(walletAddress);
      if (validAddress && tokens.daiToken) {
        const value = ethers.utils.parseEther(amount.toString());
        await tokens.daiToken.mint(validAddress, value);
        setWalletAddress("");
        setAmount("");
      }
    }
  };

  const printWBTC = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (tokens) {
      const validAddress = await isValidAddress(walletAddress);
      if (validAddress && tokens.wbtcToken) {
        const value = ethers.utils.parseEther(amount.toString());
        await tokens.wbtcToken.mint(validAddress, value);
        setWalletAddress("");
        setAmount("");
      }
    }
  };

  const wrapETH = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (tokens) {
      const validAddress = await isValidAddress(walletAddress);
      if (validAddress && tokens.wethToken) {
        const value = ethers.utils.parseEther(amount.toString());
        await tokens.wethToken.deposit({ value });
        setWalletAddress("");
        setAmount("");
      }
    }
  };

  return (
    <div className="faucet">
      <div>
        <h3>Faucet</h3>
        <div className="actions">
          <Card>
            <div className="info">
              <h4 className="mb-4">Print DAI</h4>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Wallet Address</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=""
                    value={walletAddress}
                    onChange={onChangeWallet}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="remove">
                <Form.Label>Amount to Print</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=""
                    value={amount}
                    onChange={onChangeAmount}
                  />
                </InputGroup>
                <Button variant="pink" className="" onClick={printDAI}>
                  Print
                </Button>
              </Form.Group>
            </Form>
          </Card>
          <Card>
            <div className="info">
              <h4 className="mb-4">Print WBTC</h4>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Wallet Address</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=""
                    value={walletAddress}
                    onChange={onChangeWallet}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="remove">
                <Form.Label>Amount to Print</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=""
                    value={amount}
                    onChange={onChangeAmount}
                  />
                </InputGroup>
                <Button variant="pink" className="" onClick={printWBTC}>
                  Print
                </Button>
              </Form.Group>
            </Form>
          </Card>
          <Card>
            <div className="info">
              <h4>Wrap ETH</h4>
              <p>You require that amount on ETH</p>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Wallet Address</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=""
                    value={walletAddress}
                    onChange={onChangeWallet}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="remove">
                <Form.Label>Amount to Print</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className=""
                    value={amount}
                    onChange={onChangeAmount}
                  />
                </InputGroup>

                <Button variant="pink" className="" onClick={wrapETH}>
                  Print
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
