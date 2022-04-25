const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5304477543:AAGRpAzEocPXY9GZM5NsE3yMsGTGbu-5dUU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



const categoryIK = [[
    {
        text: 'Blockchain Technology',
        callback_data: "Blockchain Technology"
    }, {
        text: 'Equilibrium’s significance and innovations',
        callback_data: "Equilibrium’s significance and innovations"
    }], [{
        text: 'Equilibrium’s advantage - Speed',
        callback_data: "Equilibrium’s advantage - Speed"
    },{
        text: 'Equilibrium’s advantage - Architecture',
        callback_data: "Equilibrium’s advantage - Architecture"
    }],[{
        text: 'Other features of Equilibrium',
        callback_data: "Other features of Equilibrium"
    },{
        text: 'FAQ on Equilibrium Engine',
        callback_data: "FAQ on Equilibrium Engine"
    },
]]



const iK1 = [[
    {
        text: 'What is Blockchain Technology?',
        callback_data: "ik1_cbd1"
    }],[ {
        text: 'What is the weakness of centralized system?',
        callback_data: "ik1_cbd2"
    }],[ {
        text: 'What does Economics mean in blockchain technology?',
        callback_data: "ik1_cbd3"
    }],[{
        text: 'What does Versatility mean in blockchain technology?',
        callback_data: "ik1_cbd4"
    }],[ {
        text: 'What does Transparency mean in blockchain technology?',
        callback_data: "ik1_cbd5"
    }],[ {
        text: 'What does Security mean in blockchain technology?',
        callback_data: "ik1_cbd6"
    }
]]

const obj1 = [
    {
       "q": "Q. What is Blockchain Technology?",
        "a" : "A. Blockchain is a data communication/storage technology that allows the transaction activities of various types of assets to be distributed within a network in the form of blocks that cannot be tampered with, and to efficiently track those assets."
    },{
       "q": "Q. What is the weakness of centralized system?",
        "a" : "A. The traditional server-client approach operates a centralized system at a very high cost in order to improve the reliability and security of the system. In addition, the centralized system requires excessive manpower and verification efforts to effectively manage, monitor and inspect the system."
    },{
        "q": "Q. What does Economics mean in blockchain technology?",
        "a": "A. Blockchain technology supports transactions in a peer-to-peer (P2P) environment, which is economical by reducing costs of operation, security, maintenance, fees and other coststhat are typically incurred in a centralized system."
    },{
        "q": "Q. What does Versatility mean in blockchain technology?",
        "a" : "A. Anything with value (tangible assets, intangible assets, etc.) can be recorded and managed on the blockchain, which means that it can be applied to any system."
    },{
        "q": "Q. What does Transparency mean in blockchain technology?",
        "a" : "A. All transaction records are transparently disclosed and accessible, reducing the cost of nurturing and regulating transactions."
    },{
        "q": "Q. What does Security mean in blockchain technology?",
        "a": "A. In a blockchain, networks are distributed to and managed by each of the numerous participants of the network, and hence there is no single point of attack for any attempts of malicious attacks, such as hacking, forgery, and tampering, which in turn prevents data manipulation and ensures network integrity."
    }
]

const iK2 = [[
    {
        text: 'What is Equilibrium?',
        callback_data: "ik2_cbd1"
    }],[{
    text: 'What is the Significance of Equilibrium?',
    callback_data: "ik2_cbd2"
}],[{
    text: 'What are the Innovations of Equilibrium?',
    callback_data: "ik2_cbd3"
}
]]


const obj2 = [
    {
        "q": "Q. What is Equilibrium?",
        "a" : "A. Equilibrium is a blockchain engine developed by EQBR Holdings. It is a blockchain engine optimized for actual commercial use and has strengths in terms of high speed and scalability."
    },{
        "q": "Q. What is the Significance of Equilibrium?",
        "a" : "A. EQBR Holdings has defined that blockchains in the current market are inadequate for commercial use.  Equilibrium compensates for the shortcomings of the 1st and 2nd generation blockchain technologies and has been developed in a form that is easy for real users to use."
    },{
        "q": "Q. What are the Innovations of Equilibrium?",
        "a": "A. Equilibrium is designed to ensure transaction speed in seconds and the scalability of the network.  Based on a non-competitive consensus algorithm, we have significantly improved the speed of processing transactions.  Equilibrium has unique structural characteristics to prevent performance degradation during network expansion as the network grows in size and number of services."
    }
]


const iK3 = [[
    {
        text: 'What factors affect the speed of blockchain?',
        callback_data: "ik3_cbd1"
    }],[ {
    text: 'What kind of consensus method does the previous-generation blockchains use?',
    callback_data: "ik3_cbd2"
}],[ {
    text: 'What is the \'PoW\' consensus method?',
    callback_data: "ik3_cbd3"
}],[{
    text: 'What is the block confirmation time of the PoW consensus method?',
    callback_data: "ik3_cbd4"
}],[ {
    text: 'What is the block generation speed of the PoW consensus method?',
    callback_data: "ik3_cbd5"
}],[ {
    text: 'What is the block generation speed and block confirmation time of previous generation blockchains?',
    callback_data: "ik3_cbd6"
}],[ {
    text: 'What kind of consensus method does the ‘Equilibrium’ use?',
    callback_data: "ik3_cbd7"
}],[ {
    text: 'What is the \'pBFT\' consensus method?',
    callback_data: "ik3_cbd8"
}],[ {
    text: 'What are the advantages of \'Equalize\' consensus method?',
    callback_data: "ik3_cbd9"
}],[ {
    text: 'Is \'Equilibrium\' suitable as a commercial blockchain in terms of speed?',
    callback_data: "ik3_cbd10"
}]
]

const obj3 = [
    {
        "q": "Q. What factors affect the speed of blockchain?",
        "a" : "A. There are two major factors that affect the speed of the blockchain: the time it takes to create a block and the time it takes to confirm the block."
    },{
        "q": "Q. What kind of consensus method does the previous-generation blockchains use?",
        "a" : "A. Bitcoin, the first-generation blockchain, and Ethereum, the second-generation blockchain, both use the PoW consensus method."
    },{
        "q": "Q. What is the 'PoW' consensus method?",
        "a": "A. PoW (Proof of Work) is a consensus method that proves that a participant has participated in the work by repeating the process of finding a hash value below the target value countless times.  The process of finding a hash value is called mining, and is performed through sheer manual labor until the desired result is obtained and repeatedly consumes a lot of resources.  All miners will compete to mine and, if successful, can present blocks to the network."
    },{
        "q": "Q. What is the block confirmation time of the PoW consensus method?",
        "a" : "A. In Proof of Work, even if a block is created, it takes a long time for the block to be confirmed.  In order for a block to be confirmed, a sufficient number of blocks must be presented after the block is created, because the way to guarantee the confirmation of a block is to determine the longest chain as the main chain.  This is guaranteed by probability theory."
    },{
        "q": "Q. What is the block generation speed of the PoW consensus method?",
        "a" : "A. The block creation time has a lower limit.  The shorter the block creation time, the greater the possibility of a ‘branch’ phenomenon to occur in which multiple blocks exist at the same height, which requires more time for block confirmation."
    },{
        "q": "Q. What is the block generation speed and block confirmation time of previous generation blockchains?",
        "a": "A. In the case of Bitcoin, the average block creation time is about 10 minutes, and it takes about an hour for a block to be confirmed.  Ethereum has a relatively shorter block creation time and block confirmation time than Bitcoin, but it still requires waiting several minutes for a transaction to be confirmed."
    },{
        "q": "Q. What kind of consensus method does the ‘Equilibrium’ use?",
        "a": "A. Equilibrium uses a consensus algorithm called ‘Equalize’, a non-competitive consensus method using pBFT, to alleviate the speed problem of ‘PoW’, a competitive consensus method of the previous generation blockchains."
    },{
        "q": "Q. What is the 'pBFT' consensus method?",
        "a": "A. pBFT is an abbreviation for Practical Byzantine Fault Tolerance, by which blocks are created through the votes of validators.  In pBFT, the block proposer creates a spare block and propagates it to other nodes in the network, after which all nodes confirm 1 spare block through voting.  Since a block is confirmed only when more than two-thirds of the votes are obtained from validators, two or more blocks cannot be confirmed at the same height, and the block is confirmed the moment it is created and agreed upon.  In other words, pBFT is an efficient way to process blocks from creation to immediate confirmation."
    },{
        "q": "Q. What are the advantages of 'Equalize' consensus method?",
        "a": "A. First, the block generation time is greatly reduced by eliminating inefficient computation processes that occur in competitive algorithms.\n" +
            "Second, when more than a certain number of blocks are piled up, the time required for block confirmation is reduced as the block is not confirmed probabilistically, but is immediately confirmed through voting.\n" +
            "Thirdly, in the existing pBFT consensus, each validator node propagates a bundle of transactions to the next block proposer to reduce traffic and thereby making it faster.\n" +
            "By simplifying the networking data included in the node-specific current state exchange and voting exchange in the network, thereby reducing the communication overhead, the system processing speed is improved.\n"
    },{
        "q": "Q. Is 'Equilibrium' suitable as a commercial blockchain in terms of speed?",
        "a": "A. Equilibrium engine implemented a speed of 4,500 tps and block generation and confirmation time of less than 3 seconds by the method described above, which is at a par with operation speed of the existing financial system. Equilibrium engine meets important criteria critical for commercial use, such as storage, stability and speed requirements.  Equilibrium engine supports a storage optimization module to respond to storage issues that may arise from high speed, and network traffic optimization module that secures stability according to varying system speed.  As a result, Equilibrium engine has evolved into a high-performance blockchain engine capable of supporting not only financial systems, but also various commercial services such as games, platforms, marketplaces and funding."
    }
]


const iK4 = [[
    {
        text: 'What does scalability mean from the perspective of blockchain technology?',
        callback_data: "ik4_cbd1"
    }],[ {
    text: 'Why do existing blockchains have low scalability?',
    callback_data: "ik4_cbd2"
    }],[ {
    text: 'What is monolithic architecture?',
    callback_data: "ik4_cbd3"
}],[{
    text: 'What is microservice architecture?',
    callback_data: "ik4_cbd4"
}],[ {
    text: 'Why are previous-generation blockchains similar to monolithic architectures?',
    callback_data: "ik4_cbd5"
}], [{
    text: 'What kind of architecture did Equilibrium design using microservice architecture?',
    callback_data: "ik4_cbd6"
}],[{
    text: 'What are the advantages of micro-chain architecture?',
    callback_data: "ik4_cbd7"
}],[ {
    text: "What Equilibrium's network look like?",
    callback_data: "ik4_cbd8"
}]
]

const obj4 = [
    {
        "q": "Q. What does scalability mean from the perspective of blockchain technology?",
        "a" : "A. Scalability refers to the degree to which a network can flexibly respond to an increase in traffic."
    },{
        "q": "Q. Why do existing blockchains have low scalability?",
        "a" : "A. Existing 1st and 2nd generation blockchains have a structure in which all services (smart contracts) are executed and stored in one chain.  In this structure, the degree of load on one service affects other services."
    },{
        "q": "Q. What is monolithic architecture?",
        "a": "A. A monolithic architecture is a form in which all business logic is packaged and serviced in a single application form, and the data used in the application is also serviced by referring to the data gathered in one place."
    },{
        "q": "Q. What is microservice architecture?",
        "a" : "A. A microservice architecture is a form of service that divides one large application into several very small applications."
    },{
        "q": "Q. Why are previous-generation blockchains similar to monolithic architectures?",
        "a" : "A. EQBR Holdings defined that the lack of scalability of previous generation block chains is derived from the limitations that all smart contracts are distributed on one chain, so that calculations are also performed only on one chain, therefore it is difficult to improve the performance of an independent system.  We’ve also identified that these problems are similar to the shortcomings of monolithic architecture."
    },{
        "q": "Q. What kind of architecture did Equilibrium design using microservice architecture?",
        "a": "A. Equilibrium engine builds a separate micro-chain for each business domain, and in any case a problem occurs due to concentration of traffic on a specific service, it does not lead to degradation of the overall service performance, thereby minimizing the correlation between services.  Equilibrium engine is divided into several micro-chains in one network, allowing to partially upgrade only the necessary parts of the network and run in specifications optimized for each individual business domain."
    },{
        "q": "Q. What are the advantages of micro-chain architecture?",
        "a" : "A. Each business domain has its own database on the ledger and logic is designed as a single micro-chain by matching smart contracts.  This isolates failures and loads by each micro-chain to eliminate correlation between multiple services, and guarantees scalability by partially upgrading only the necessary sections that enhances both network economy and system optimization by each business domain."
    },{
        "q": "Q. What Equilibrium's network look like?",
        "a": "A. Equilibrium is comprised of several connections between micro-chains.  A micro-chain is consisted of a main micro-chain, which configures and operates the economy of the network, and regular micro-chains, which participate in the economy of the main micro-chain."
    }
]


const iK5 = [[
    {
        text: 'Are there any advantages of Equilibrium engine in terms of trilemmas?',
        callback_data: "ik5_cbd1"
    }],[ {
    text: "What are the advantages of Equilibrium's smart contract?",
    callback_data: "ik5_cbd2"
}],[ {
    text: 'What is the consensus algorithm development plan?',
    callback_data: "ik5_cbd3"
}],[{
    text: 'How does software optimization work?',
    callback_data: "ik5_cbd4"
}]
]

const obj5 = [
    {
        "q": "Q. Are there any advantages of Equilibrium engine in terms of trilemmas?",
        "a" : "A. In blockchain, trilemma means that the three problems of scalability, security, and decentralization cannot be solved all at once.  Previous generations of blockchains that focused on decentralization and stability suffers from very slow transaction processing speed at a very large number of users, making them inadequate for successful commercialization model.  Equilibrium has been developed with some degree of decentralization and maximum scalability and security, which makes Equilibrium ultimately a most commercially viable blockchain."
    },{
        "q": "Q. What are the advantages of Equilibrium's smart contract?",
        "a" : "A. Equilibrium provides a variety of languages that developers are familiar with as smart contract development languages, and thereby reduces the barrier of entry and burden on developers and further reduces the chance of error when implementing complex logic.  This prevents abnormal smart contracts from being deployed on the network, allowing the network to operate reliably."
    },{
        "q": "Q. What is the consensus algorithm development plan?",
        "a": "A. In the future, we plan to keep the current stability and scalability on a balance and increase the speed while doing so.  This will be done by improving our own consensus model to choose a minimum number of nodes that guarantee BFT and reducing the number of actual nodes participating in the consensus even if the number of nodes is large."
    },{
        "q": "Q. How does software optimization work?",
        "a" : "A. Equilibrium's software will be ported to Go language, which will greatly improve the speed through proper memory management and low-level functions of Go language.  In addition, the time required for each function will be reduced and the network speed will be increased by up to 8 times through improvements in network communication protocol."
    }
]


const iK6 = [[
    {
        text: "What is Equilibrium's speed?",
        callback_data: "ik6_cbd1"
    }],[ {
    text: "What is Equilibrium's consensus method?",
    callback_data: "ik6_cbd2"
}],[ {
    text: "How is Equilibrium's consensus scalability guaranteed?",
    callback_data: "ik6_cbd3"
}],[ {
    text: 'What does safety in blockchain technology mean, and how is it characterized in Equilibrium?',
    callback_data: "ik6_cbd4"
}],[ {
    text: 'What does Liveness in blockchain technology mean, and how is it characterized in Equilibrium?',
    callback_data: "ik6_cbd5"
}],[{
    text: "How is Equilibrium's network stability guaranteed?",
    callback_data: "ik6_cbd6"
}],[{
    text: "What are the characteristics of Equilibrium's smart contract?",
    callback_data: "ik6_cbd7"
}],[{
    text: "What  smart contract standard does Equilibrium supports?",
    callback_data: "ik6_cbd8"
}],[{
    text: "Unlike the existing monolithic architecture, what advantages does the microservice architecture of Equilibrium have?",
    callback_data: "ik6_cbd9"
}],[{
    text: "Are nodes in Equilibrium economically operated?",
    callback_data: "ik6_cbd10"
}],[{
    text: "Does Equilibrium have hardware dependencies?",
    callback_data: "ik6_cbd11"
}],[{
    text: "What is the Coin Economy in Equilibrium's microchain structure?",
    callback_data: "ik6_cbd12"
}],[{
    text: "Is Equilibrium commercially viable?",
    callback_data: "ik6_cbd13"
}]
]

const obj6 = [
    {
        "q": "Q. What is Equilibrium's speed?",
        "a" : "A. Equilibrium supports fast transaction speeds of up to 4,500 tps and a block determination rate between 1-3 seconds through the PBFT-based consensus algorithm, Equalize."
    },{
        "q": "Q. What is Equilibrium's consensus method?",
        "a" : "A. Equalize is a non-competitive consensus algorithm based on PBFT.  Equalize  does not have the same competitive structure as the existing POW method, and thereby eliminating the need for unnecessary waste of resources characterized in existing POW method."
    },{
        "q": "Q. How is Equilibrium's consensus scalability guaranteed?",
        "a": "A. Equalize is conducting a study with ETRI on \"Multiple Consensus Selection for Byzantine Resistance.\" The study reduced the number of thread nodes participating in the settlement, ensuring BFT."
    },{
        "q": "Q. What does safety in blockchain technology mean, and how is it characterized in Equilibrium?",
        "a" : "A. Safety means when a consensus occurs between nodes, the value must be the same no matter which node is accessing.  In the existing generation of blockchains, we can see that safety is not being followed and divergence occurs.  On the other hand, the PBFT-based consensus algorithm Equalize developed by EQBR is a non-competitive consensus algorithm that uses voting, and no other blocks occur in a single contract."
    },{
        "q": "Q. What does Liveness in blockchain technology mean, and how is it characterized in Equilibrium?",
        "a": "A. Liveness means that if there is no problem with the consensus target, there must be a consensus within the network.  Equalize is designed to ensure liveness at all times, except when more than 1/3 of the Byzantines are present in the network."
    },{
        "q": "Q. How is Equilibrium's network stability guaranteed?",
        "a": "A. Equilibrium defends against indiscriminate network malicious attacks, such as Ddos, through transaction fees.  Equilibrium also adjusts the number of network transactions that each node can accommodate in real time to avoid failures that might occur to the system."
    },{
        "q": "Q. What are the characteristics of Equilibrium's smart contract?",
        "a": "A. Equilibrium currently supports PHP as a smart contract development language.  By providing a language that is more familiar than other software languages, such as Solidity, as a smart contract development language, we have made it easier for users to develop and utilize smart contracts."
    },{
        "q": "Q. What smart contract standard does Equilibrium supports?",
        "a": "A. Equilibrium offers a useful smart contract standard (ESC), similar to Ethereum's ERC, to help blockchain developers quickly understand and develop.  A parent class object that implements and inherits the basic functionality for implementing services such as STOs, NFTs, and so on, making it easier for developers to develop dApps."
    },{
        "q": "Q. Unlike the existing monolithic architecture, what advantages does the microservice architecture of Equilibrium have?",
        "a": "A. In other blockchains, similar to monolithic architectures, a high volume of traffic can cause problems in some service operations, which can further spread to the entire system.  Equilibrium leverages a microservices architecture to develop microchains with multiple business domains on one network, thereby minimizing the negative impact between smart contract services, facilitating scale and isolating degradation."
    },{
        "q": "Q. Are nodes in Equilibrium economically operated?",
        "a": "A. Equilibrium allows nodes with the recommended specification of computing resources (cpu8, memory 16GiB), which is much cheaper than the specifications required to participate in consensus or become full nodes on an existing blockchain."
    },{
        "q": "Q. Does Equilibrium have hardware dependencies?",
        "a": "A. Equilibrium ultimately aims to participate in the network in any computer environment, so it does not rely on specific hardware specifications because it has implemented optimizations of the blockchain system only through software, algorithms, network load optimization, etc., regardless of the hardware."
    },{
        "q": "Q. What is the Coin Economy in Equilibrium's microchain structure?",
        "a": "A. Starting from the coins of the main microchain, several microchains can easily form the token economy.  Tokens can be exchanged on the DEX of the main microchain, and the node reward and fee policy can be reasonably organized according to the characteristics of each microchain."
    },{
        "q": "Q. Is Equilibrium commercially viable?",
        "a": 'A. As with current market trends, EQBR has focused on commercializing the blockchain immediately, rather than to continue a debate about dividing the blockchain into private and public.  Under the motto "Beyond Private and Public", we have opened up a new blockchain paradigm in the commercial arena by leveraging speed and scalability through optimization, at the same time,  not sacrificing Safety, Liveness and Decentralization.'
    }
]






bot.onText(/\/volare/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Question Category', {
            reply_markup: {
                inline_keyboard: categoryIK
            }
        }
    );
})

bot.on("callback_query", (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id
    bot.answerCallbackQuery(callbackQuery.id)
        .then(() =>{
            switch (callbackQuery.data){
//-----------------------------------------------------------------------------------------
                case "Blockchain Technology":
                    bot.sendMessage(chatId,'Question List',{
                            reply_markup: {
                                inline_keyboard: iK1
                            }
                        }
                    );
                    break;
                case "Equilibrium’s significance and innovations":
                    bot.sendMessage(chatId,'Question List',{
                            reply_markup: {
                                inline_keyboard: iK2
                            }
                        }
                    );
                    break;
                case "Equilibrium’s advantage - Speed":
                    bot.sendMessage(chatId,'Question List',{
                            reply_markup: {
                                inline_keyboard: iK3
                            }
                        }
                    );
                    break;
                case "Equilibrium’s advantage - Architecture":
                    bot.sendMessage(chatId,'Question List',{
                            reply_markup: {
                                inline_keyboard: iK4
                            }
                        }
                    );
                    break;
                case "Other features of Equilibrium":
                    bot.sendMessage(chatId,'Question Lists',{
                            reply_markup: {
                                inline_keyboard: iK5
                            }
                        }
                    );
                    break;
                case "FAQ on Equilibrium Engine":
                    bot.sendMessage(chatId,'Question List',{
                            reply_markup: {
                                inline_keyboard: iK6
                            }
                        }
                    );
                    break;
//-----------------------------------------------------------------------------------------
                case "ik1_cbd1":
                    bot.sendMessage(chatId,obj1[0].q +'\n\n'+obj1[0].a)
                    break;
                case "ik1_cbd2":
                    bot.sendMessage(chatId,obj1[1].q +'\n\n'+obj1[1].a)
                    break;
                case "ik1_cbd3":
                    bot.sendMessage(chatId,obj1[2].q +'\n\n'+obj1[2].a)
                    break;
                case "ik1_cbd4":
                    bot.sendMessage(chatId,obj1[3].q +'\n\n'+obj1[3].a)
                    break;
                case "ik1_cbd5":
                    bot.sendMessage(chatId,obj1[4].q +'\n\n'+obj1[4].a)
                    break;
                case "ik1_cbd6":
                    bot.sendMessage(chatId,obj1[5].q +'\n\n'+obj1[5].a)
                    break;
//-----------------------------------------------------------------------------------------
                case "ik2_cbd1":
                    bot.sendMessage(chatId,obj2[0].q +'\n\n'+obj2[0].a)
                    break;
                case "ik2_cbd2":
                    bot.sendMessage(chatId,obj2[1].q +'\n\n'+obj2[1].a)
                    break;
                case "ik2_cbd3":
                    bot.sendMessage(chatId,obj2[2].q +'\n\n'+obj2[2].a)
                    break;
//-----------------------------------------------------------------------------------------
                case "ik3_cbd1":
                    bot.sendMessage(chatId,obj3[0].q +'\n\n'+obj3[0].a)
                    break;
                case "ik3_cbd2":
                    bot.sendMessage(chatId,obj3[1].q +'\n\n'+obj3[1].a)
                    break;
                case "ik3_cbd3":
                    bot.sendMessage(chatId,obj3[2].q +'\n\n'+obj3[2].a)
                    break;
                case "ik3_cbd4":
                    bot.sendMessage(chatId,obj3[3].q +'\n\n'+obj3[3].a)
                    break;
                case "ik3_cbd5":
                    bot.sendMessage(chatId,obj3[4].q +'\n\n'+obj3[4].a)
                    break;
                case "ik3_cbd6":
                    bot.sendMessage(chatId,obj3[5].q +'\n\n'+obj3[5].a)
                    break;
                case "ik3_cbd7":
                    bot.sendMessage(chatId,obj3[6].q +'\n\n'+obj3[6].a)
                    break;
                case "ik3_cbd8":
                    bot.sendMessage(chatId,obj3[7].q +'\n\n'+obj3[7].a)
                    break;
                case "ik3_cbd9":
                    bot.sendMessage(chatId,obj3[8].q +'\n\n'+obj3[8].a)
                    break;
                case "ik3_cbd10":
                    bot.sendMessage(chatId,obj3[9].q +'\n\n'+obj3[9].a)
                    break;
//-----------------------------------------------------------------------------------------
                case "ik4_cbd1":
                    bot.sendMessage(chatId,obj4[0].q +'\n\n'+obj4[0].a)
                    break;
                case "ik4_cbd2":
                    bot.sendMessage(chatId,obj4[1].q +'\n\n'+obj4[1].a)
                    break;
                case "ik4_cbd3":
                    bot.sendMessage(chatId,obj4[2].q +'\n\n'+obj4[2].a)
                    break;
                case "ik4_cbd4":
                    bot.sendMessage(chatId,obj4[3].q +'\n\n'+obj4[3].a)
                    break;
                case "ik4_cbd5":
                    bot.sendMessage(chatId,obj4[4].q +'\n\n'+obj4[4].a)
                    break;
                case "ik4_cbd6":
                    bot.sendMessage(chatId,obj4[5].q +'\n\n'+obj4[5].a)
                    break;
                case "ik4_cbd7":
                    bot.sendMessage(chatId,obj4[6].q +'\n\n'+obj4[6].a)
                    break;
                case "ik4_cbd8":
                    bot.sendMessage(chatId,obj4[7].q +'\n\n'+obj4[7].a)
                    break;
//----------------------------------------------------------------------------------------
                case "ik5_cbd1":
                    bot.sendMessage(chatId,obj5[0].q +'\n\n'+obj5[0].a)
                    break;
                case "ik5_cbd2":
                    bot.sendMessage(chatId,obj5[1].q +'\n\n'+obj5[1].a)
                    break;
                case "ik5_cbd3":
                    bot.sendMessage(chatId,obj5[2].q +'\n\n'+obj5[2].a)
                    break;
                case "ik5_cbd4":
                    bot.sendMessage(chatId,obj5[3].q +'\n\n'+obj5[3].a)
                    break;


//-----------------------------------------------------------------------------------------
                case "ik6_cbd1":
                    bot.sendMessage(chatId,obj6[0].q +'\n\n'+obj6[0].a)
                    break;
                case "ik6_cbd2":
                    bot.sendMessage(chatId,obj6[1].q +'\n\n'+obj6[1].a)
                    break;
                case "ik6_cbd3":
                    bot.sendMessage(chatId,obj6[2].q +'\n\n'+obj6[2].a)
                    break;
                case "ik6_cbd4":
                    bot.sendMessage(chatId,obj6[3].q +'\n\n'+obj6[3].a)
                    break;
                case "ik6_cbd5":
                    bot.sendMessage(chatId,obj6[4].q +'\n\n'+obj6[4].a)
                    break;
                case "ik6_cbd6":
                    bot.sendMessage(chatId,obj6[5].q +'\n\n'+obj6[5].a)
                    break;
                case "ik6_cbd7":
                    bot.sendMessage(chatId,obj6[6].q +'\n\n'+obj6[6].a)
                    break;
                case "ik6_cbd8":
                    bot.sendMessage(chatId,obj6[7].q +'\n\n'+obj6[7].a)
                    break;
                case "ik6_cbd9":
                    bot.sendMessage(chatId,obj6[8].q +'\n\n'+obj6[8].a)
                    break;
                case "ik6_cbd10":
                    bot.sendMessage(chatId,obj6[9].q +'\n\n'+obj6[9].a)
                    break;
                case "ik6_cbd11":
                    bot.sendMessage(chatId,obj6[10].q +'\n\n'+obj6[10].a)
                    break;
                case "ik6_cbd12":
                    bot.sendMessage(chatId,obj6[11].q +'\n\n'+obj6[11].a)
                    break;
                case "ik6_cbd13":
                    bot.sendMessage(chatId,obj6[12].q +'\n\n'+obj6[12].a)
                    break;
//-----------------------------------------------------------------------------------------
                default:
                    console.log(callbackQuery.data)
                    break;
            }

        });
});

