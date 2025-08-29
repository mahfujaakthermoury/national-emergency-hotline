

        // Heart icon counting function
        let heartCount = 0;
        const heartCounter = document.getElementById('heart-count');

        const hearts = document.querySelectorAll('.fa-heart');
        hearts.forEach(heart => {
            heart.addEventListener('click', () => {
                heartCount++;
                heartCounter.innerText = heartCount;
                //heart.classList.add('fa-solid');
                // heart.style.color = 'red';
            });
        });

        // Call Buttons functionalities and coin icon counting function
        let coins = 100;
        const coinDisplay = document.getElementById('coin-count');

        const callButtom = document.querySelectorAll('.call-btn');

        callButtom.forEach(button => {
            button.addEventListener('click', () => {
                const serviceName = button.getAttribute('service-name');
                const serviceNumber = button.getAttribute('service-number');
                if (coins >= 20) {
                    alert(`Calling ${serviceName}: ${serviceNumber}`);
                    coins -= 20;
                    coinDisplay.innerText = coins;
                } else {
                    alert(" Not enough coins to call. You need at least 20 coins to make call.")
                }
            });
        });

        // Copy counting and alert function
        let copyCount = 0;
        const copyCounter = document.getElementById('copy-count');
        const copyButton = document.querySelectorAll('.copy-btn');

        copyButton.forEach(button => {
            button.addEventListener('click', () => {
                const copyNumber = button.getAttribute('copy-number');
                navigator.clipboard.writeText(copyNumber);
                copyCount++;
                copyCounter.innerText = copyCount;
                alert(`Number copied: ${copyNumber}`);
            });
        });

        // Call history list function 
        const callButtons = document.querySelectorAll('.call-btn');
        const callHistoryList = document.getElementById('call-history-list');
        
        callButtom.forEach(button => {
            button.addEventListener('click', () => {
                const serviceName = button.getAttribute('service-name');
                const serviceNumber = button.getAttribute('service-number');  

                const historyItem = document.createElement('div');
                historyItem.className = 'flex justify-between items-center bg-gray-50 p-2 mt-2';

                const left = document.createElement('div');
                const nameEl = document.createElement('h2');
                nameEl.className = 'font-bold';
                nameEl.textContent = serviceName;

                const numberEl = document.createElement('p');
                numberEl.className = 'text-gray-500';
                numberEl.textContent = serviceNumber;

                left.appendChild(nameEl);
                left.appendChild(numberEl);

                const right = document.createElement('div');
                const timeEl = document.createElement('p');
                timeEl.className = 'text-[13px]';
                const now = new Date();
                timeEl.textContent = now.toLocaleTimeString();
                right.appendChild(timeEl);

                historyItem.appendChild(left);
                historyItem.appendChild(right);
                callHistoryList.appendChild(historyItem);
            });
        });

        // Clear all call history
        const clearButton= document.getElementById('clear-btn');
        document.getElementById('clear-btn').addEventListener('click', () =>{
            const callHistoryList = document.getElementById('call-history-list');

            while (callHistoryList.children.length>0){
                callHistoryList.removeChild(callHistoryList.lastChild);
            }
            callHistoryList.appendChild(placeholder);
        })