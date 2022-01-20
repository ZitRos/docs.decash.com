"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[3267],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),h=c(t),u=i,p=h["".concat(r,".").concat(u)]||h[u]||d[u]||o;return t?a.createElement(p,s(s({ref:n},g),{},{components:t})):a.createElement(p,s({ref:n},g))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=h;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5327:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.src,t=e.alt,i=e.width;return a.createElement("p",{style:{textAlign:"center",marginTop:20,marginBottom:20}},a.createElement("img",{alt:t,src:n,style:{width:i}}))}},9204:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return d},default:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),s=t(5327),l=["components"],r={sidebar_position:1},c="Signing transactions",g={unversionedId:"guides/signing-transactions",id:"guides/signing-transactions",title:"Signing transactions",description:"Before being able to submit transactions, you (or the user who owns the account from which the funds are being spent)",source:"@site/docs/guides/signing-transactions.mdx",sourceDirName:"guides",slug:"/guides/signing-transactions",permalink:"/docs/guides/signing-transactions",editUrl:"https://github.com/DeCash-Official/docs.decash.com/edit/main/docs/guides/signing-transactions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Getting Algo",permalink:"/docs/getting-started/getting-algo"},next:{title:"Merchandise store",permalink:"/docs/guides/merchant"}},d=[{value:"Signing with Algorand Wallet (WalletConnect)",id:"signing-with-algorand-wallet-walletconnect",children:[{value:"Connecting to the wallet",id:"connecting-to-the-wallet",children:[],level:3},{value:"Getting the account address",id:"getting-the-account-address",children:[],level:3},{value:"Signing the transactions",id:"signing-the-transactions",children:[],level:3}],level:2},{value:"Signing with MyAlgoWallet",id:"signing-with-myalgowallet",children:[{value:"Connecting to the wallet and getting the addresses",id:"connecting-to-the-wallet-and-getting-the-addresses",children:[],level:3},{value:"Signing the transactions",id:"signing-the-transactions-1",children:[],level:3}],level:2},{value:"Signing with AlgoSigner",id:"signing-with-algosigner",children:[{value:"Connecting to the wallet",id:"connecting-to-the-wallet-1",children:[],level:3},{value:"Getting the addresses",id:"getting-the-addresses",children:[],level:3},{value:"Signing the transactions",id:"signing-the-transactions-2",children:[],level:3}],level:2},{value:"Signing with the KMD",id:"signing-with-the-kmd",children:[{value:"Connecting to the KMD",id:"connecting-to-the-kmd",children:[],level:3},{value:"Signing a transaction",id:"signing-a-transaction",children:[],level:3}],level:2},{value:"Signing with the SDK",id:"signing-with-the-sdk",children:[],level:2}],h={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"signing-transactions"},"Signing transactions"),(0,o.kt)("p",null,"Before being able to submit transactions, you (or the user who owns the account from which the funds are being spent)\nneed to sign them. For each different way in which you can create a wallet and maintain an account, there is a way\nto sign transactions."),(0,o.kt)("p",null,"For simplicity, in all of the following cases let us consider a transaction obtained from the following ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function getTransactions(from) {\n    const response = await fetch('https://delegator-dev01b.arringo.co/api-test/TransferTokens', {\n        method: 'POST',\n        body: JSON.stringify({\n            assetId: 'USDD',\n            sender: {\n                address: from,\n                amount: 5,\n            },\n            receiver: 'CNIOPGMZ3OSZLPEO7POGMVUEQVDV2RT3G4MSKGHRBX2SOPOEIOGBIFIMVQ',\n        }),\n    });\n    const {txns} = await response.json();\n    return {txns};\n}\n")),(0,o.kt)("h2",{id:"signing-with-algorand-wallet-walletconnect"},"Signing with Algorand Wallet (WalletConnect)"),(0,o.kt)("p",null,"If you (or your users) are using the Algorand Wallet, WalletConnect is the protocol that you will be using. In this guide we will suppose that some user is interacting with a web page, and is prompted to sign a transaction."),(0,o.kt)("p",null,"To use walletconnect, we need to import two modules: one for managing the connection with the wallet, and one to show a QR code that needs to be scanned in order to instantiate a connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import WalletConnect from "@walletconnect/client";\nimport QRCodeModal from "algorand-walletconnect-qrcode-modal";\n')),(0,o.kt)("h3",{id:"connecting-to-the-wallet"},"Connecting to the wallet"),(0,o.kt)("p",null,"To connect to a wallet, we will use the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function setUpWallet() {\n    const wallet = new WalletConnect({\n        bridge: "https://bridge.walletconnect.org",\n        qrcodeModal: QRCodeModal,\n    });\n    if (!wallet.connected) {\n        wallet.createSession();\n        await new Promise((resolve) => {\n            wallet.on("connect", (error, payload) => {\n                if (error) { throw error; }\n                resolve();\n            });\n        });\n    }\n    return wallet;\n}\n')),(0,o.kt)("p",null,"Let us analyze it line by line. On the first four lines an instance of WalletConnect is created, which will be used for all consequent interactions with the wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const wallet = new WalletConnect({\n    bridge: "https://bridge.walletconnect.org",\n    qrcodeModal: QRCodeModal,\n});\n')),(0,o.kt)("p",null,"If the user is not yet connected to its wallet, then ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.createSession()")," is run, which prompts the user to scan a QR code. The function will then wait for the user to connect before returning."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'if (!wallet.connected) {\n    wallet.createSession();\n    await new Promise((resolve) => {\n        wallet.on("connect", (error, payload) => {\n            if (error) { throw error; }\n            resolve();\n        });\n    });\n}\n')),(0,o.kt)("p",null,"In the meanwhile, the user will be able to open up the Algorand Wallet app, and scan the QR code:"),(0,o.kt)(s.Z,{alt:"Algorand wallet connect",src:"/img/algorandwallet_connectflow.png",mdxType:"CenteredImage"}),(0,o.kt)("h3",{id:"getting-the-account-address"},"Getting the account address"),(0,o.kt)("p",null,"Now that we have an instance of WalletConnect open, it is possible to get the connected account by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"wallet.accounts[0]\n")),(0,o.kt)("h3",{id:"signing-the-transactions"},"Signing the transactions"),(0,o.kt)("p",null,"The following snippet creates an array of objects, each containing the transaction itself and, for the transactions which should not be signed, an empty array of signers. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const group = txns.map(({txn, signers}) => (signers.length > 0) ? {txn} : {txn, signers: []})\n")),(0,o.kt)("p",null,"Then, a request to sign the transactions is sent to the wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const result = await wallet.sendCustomRequest({\n    id: Date.now() + Math.floor(Math.random() * 1000),\n    jsonrpc: "2.0",\n    method: "algo_signTxn",\n    params: [group],\n});\n')),(0,o.kt)("p",null,"When the request is sent, the application will show a request to sign a group of transactions. "),(0,o.kt)(s.Z,{alt:"Algorand wallet confirm transaction",src:"/img/algorandwallet_confirmflow.png",mdxType:"CenteredImage"}),(0,o.kt)("p",null,"Once signed, an array of transactions is returned. However, this array must be filtered in order to remove the transactions that were not signed, and to correctly encode the ones that were:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsigned = txns.filter(({signers}) => signers.length == 0).map(({txn}) => txn);\nconst signed = result.filter(txn => txn != undefined).map(txn => btoa(String.fromCharCode.apply(null, txn)))\n")),(0,o.kt)("p",null,"These results can then be sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitTransaction")," endpoint for submission."),(0,o.kt)("h2",{id:"signing-with-myalgowallet"},"Signing with MyAlgoWallet"),(0,o.kt)("p",null,"Another way to sign transaction is by using MyAlgoWallet and MyAlgoConnect. Firstly, the MyAlgoConnect module must be imported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import MyAlgoConnect from '@randlabs/myalgo-connect';\n")),(0,o.kt)("h3",{id:"connecting-to-the-wallet-and-getting-the-addresses"},"Connecting to the wallet and getting the addresses"),(0,o.kt)("p",null,"Before being able to connect to a wallet, an instance of MyAlgoConnect must be created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const wallet = new MyAlgoConnect();\n")),(0,o.kt)("p",null,"Then, by using that instance, it is possible to run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const accounts = (await wallet.connect()).map(account => account.address);\n")),(0,o.kt)("p",null,"to connect to the wallet and get the addresses of all connected accounts. When run, the user will be prompted\nwith a popup asking for their wallet's password:"),(0,o.kt)(s.Z,{alt:"Connect to MyAlgoWallet",src:"/img/myalgoconnect_connect.png",width:300,mdxType:"CenteredImage"}),(0,o.kt)("p",null,"After inserting their password, the prompt will ask the user to choose which accounts to connect:"),(0,o.kt)(s.Z,{alt:"Select wallet in MyAlgoWallet",src:"/img/myalgoconnect_select.png",width:300,mdxType:"CenteredImage"}),(0,o.kt)("h3",{id:"signing-the-transactions-1"},"Signing the transactions"),(0,o.kt)("p",null,"To sign the transactions, the ",(0,o.kt)("inlineCode",{parentName:"p"},"signTransaction")," method can be used, but first, an array containing only the transactions that must be signed, needs to be created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const toSign = txns.filter(({signers}) => signers.length > 0).map(({txn}) => txn)\nconst result = await wallet.signTransaction(toSign)\n")),(0,o.kt)("p",null,"When run, a popup wil appear, asking the user to confirm if they are fine with signing the shown transaction. Once accepted, the user is asked once more for their password."),(0,o.kt)(s.Z,{alt:"Sign with AlgoSigner",src:"/img/myalgoconnect_sign.png",width:300,mdxType:"CenteredImage"}),(0,o.kt)("p",null,"Once signed, it is possible to encode the signed transactions to base64"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsigned = txns.filter(({signers}) => signers.length == 0).map(({txn}) => txn)\nconst signed = result.map(({blob}) => btoa(String.fromCharCode.apply(null, blob)));\n")),(0,o.kt)("p",null,"so that they can be sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitTransaction")," endpoint."),(0,o.kt)("h2",{id:"signing-with-algosigner"},"Signing with AlgoSigner"),(0,o.kt)("p",null,"The last wallet for which we'll show how to sign transactions is AlgoSigner. Since AlgoSigner injects itself into the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object, we do not need to import any library."),(0,o.kt)("h3",{id:"connecting-to-the-wallet-1"},"Connecting to the wallet"),(0,o.kt)("p",null,"To connect to a wallet, the following snippet can be run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await AlgoSigner.connect();\n")),(0,o.kt)("p",null,"When run, a pop-up will appear, asking the user to enter their password, and to confirm that they actually want to connect the wallet to the website, enabling it to read the list of accounts, and send requests to sign transactions."),(0,o.kt)(s.Z,{alt:"Connecting to AlgoSigner",src:"/img/algosigner_connect.png",width:300,mdxType:"CenteredImage"}),(0,o.kt)("p",null,"Note that no instance of the wallet is returned. The AlgoSigner object will instead be used for all following operations.   "),(0,o.kt)("h3",{id:"getting-the-addresses"},"Getting the addresses"),(0,o.kt)("p",null,"To get the addresses of all connected accounts, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"AlgoSigner.accounts")," can be used. As a parameter, we must specify which ledger we are using: TestNet, or MainNet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const accounts = await AlgoSigner.accounts({ledger: 'TestNet'}).map(account => account.address);\n")),(0,o.kt)("h3",{id:"signing-the-transactions-2"},"Signing the transactions"),(0,o.kt)("p",null,"Lastly, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"AlgoSigner.signTxn")," can be run. Its result should be filtered to remove all unsigned transactions, and mapped to a base64 encoding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsigned = txns.filter(({signers}) => signers.length == 0).map(({txn}) => txn)\nconst signed = (await AlgoSigner.signTxn(txns))\n    .filter(txn => txn != undefined)\n    .map(({blob}) => blob);\n")),(0,o.kt)("p",null,"When run, a pop-up will ask to confirm each transaction, and then for the user's password."),(0,o.kt)(s.Z,{alt:"Sign with AlgoSigner",src:"/img/algosigner_sign.png",width:600,mdxType:"CenteredImage"}),(0,o.kt)("h2",{id:"signing-with-the-kmd"},"Signing with the KMD"),(0,o.kt)("p",null,"Next, let us take a look at how to sign transactions with the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.algorand.org/docs/clis/kmd/"},"KMD"),"."),(0,o.kt)("h3",{id:"connecting-to-the-kmd"},"Connecting to the KMD"),(0,o.kt)("p",null,"Firstly, a connection to the KMD is needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const kmd = new algosdk.Kmd(TOKEN, BASE_SERVER, PORT)\n")),(0,o.kt)("p",null,'Once connected to the KMD, it is necessary to initialize a "connection" with the wallet that will be signing the transaction. To do this, we must first obtain the ID of the address (which, in this case, will be done by finding the wallet with the correct name). Once we have obtained the wallet ID, we must initialize a wallet handle (which requires the wallet ID, and the wallet password). '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { wallets } = (await kmd.listWallets());\nconst wallet = wallets.find(({ name }) => name === WALLET_NAME);\nconst handle = (await kmd.initWalletHandle(wallet.id, WALLET_PASSWORD)).wallet_handle_token;\n")),(0,o.kt)("p",null,"Now that we have obtained a handle for this wallet, we can use it for the next actions."),(0,o.kt)("h3",{id:"signing-a-transaction"},"Signing a transaction"),(0,o.kt)("p",null,"To sign a transaction with the KMD, we must provide it the Transaction object that we want to sign. Therefore, we can filter all the transactions that must be signed, decode them, and then call the ",(0,o.kt)("inlineCode",{parentName:"p"},"kmd.signTransaction")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsigned = txns.filter(({ signers }) => signers.length === 0).map(({ txn }) => txn);\nconst signed = await Promise.all(txns\n    .filter(({ signers }) => signers.length > 0)\n    .map(({ txn }) => algosdk.decodeUnsignedTransaction(Buffer.from(txn, 'base64')))\n    .map((txn) => kmd.signTransaction(handle, PASSWORD, txn)))\n")),(0,o.kt)("p",null,"Once obtained the arrays of unsigned and signed transactions, we can submit them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitTransaction")," endpoint. "),(0,o.kt)("p",null,"After using the wallet handle, it is important to release it (to not allow it to be used again to sign other transactions)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await kmd.releaseWalletHandle(handle);\n")),(0,o.kt)("h2",{id:"signing-with-the-sdk"},"Signing with the SDK"),(0,o.kt)("p",null,"Lastly, we will take a look at how transactions can be signed directly with the ",(0,o.kt)("a",{parentName:"p",href:"https://algorand.github.io/js-algorand-sdk/"},"SDK"),".\nFirstly, each transaction that needs to be signed must be decoded from base64 to a transaction object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const toSign = txns\n    .filter(({signers}) => signers.length > 0)\n    .map(({txn, signers}) => ({\n        signers: signers,\n        txn: algosdk.decodeUnsignedTransaction(Buffer.from(txn, 'base64'))\n    }))\n")),(0,o.kt)("p",null,"Then, each transaction can be signed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"signTxn")," method, with as a parameter the secret key of the signing account, before being re-encoded into base64:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const signed = toSign\n    .map(({txn, signers}) => txn.signTxn(accounts[signers[0]]))\n    .map((txn) => Buffer.from(txn).toString('base64'));\n")),(0,o.kt)("p",null,"Then, together with the array of unsigned transactions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const unsigned = txns\n    .filter(({signers}) => signers.length === 0).map(({txn}) => txn);\n")),(0,o.kt)("p",null,"It will be possible to make a submission to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitTransaction")," endpoint."))}u.isMDXComponent=!0}}]);