interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

// Elementos del DOM
const tableBody = document.getElementById('crypto-table-body') as HTMLTableSectionElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const spinner = document.getElementById('spinner') as HTMLDivElement;
const btnRefresh = document.getElementById('btn-refresh') as HTMLButtonElement;

// API gratuita y pública de CoinGecko
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

let allCryptos: CryptoAsset[] = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchCryptoData();

  searchInput.addEventListener('input', () => {
    filtrarCriptos();
  });

  btnRefresh.addEventListener('click', () => {
    fetchCryptoData();
  });
});

async function fetchCryptoData(): Promise<void> {
  mostrarSpinner(true);
  tableBody.innerHTML = '';

  try {
    const response = await fetch(API_URL);

    if (response.status === 429) {
      throw new Error('Límite de peticiones alcanzado. Espera unos segundos.');
    }

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    allCryptos = await response.json();
    renderCryptoList(allCryptos);
  } catch (error) {
    console.error('Error de red:', error);
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-danger py-4">
          Error de conexión al obtener los datos. Asegúrate de ejecutar la web en un servidor local (Live Server).
        </td>
      </tr>`;
  } finally {
    mostrarSpinner(false);
  }
}

function filtrarCriptos(): void {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    renderCryptoList(allCryptos);
    return;
  }

  const filtradas = allCryptos.filter(crypto => 
    crypto.name.toLowerCase().includes(query) || 
    crypto.symbol.toLowerCase().includes(query)
  );

  renderCryptoList(filtradas);
}

function renderCryptoList(cryptos: CryptoAsset[]): void {
  tableBody.innerHTML = '';

  if (cryptos.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-4">
          No se encontraron criptomonedas.
        </td>
      </tr>`;
    return;
  }

  cryptos.forEach((crypto) => {
    const precio = crypto.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const cambio24h = crypto.price_change_percentage_24h || 0;
    const capMercado = crypto.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

    const claseCambio = cambio24h >= 0 ? 'text-success' : 'text-danger';
    const signoCambio = cambio24h >= 0 ? '+' : '';

    const row = document.createElement('tr');
    row.innerHTML = `
      <th scope="row">${crypto.market_cap_rank}</th>
      <td>
        <div class="d-flex align-items-center">
          <img src="${crypto.image}" alt="${crypto.symbol}" width="24" height="24" class="me-2">
          <strong>${crypto.name}</strong>
          <span class="badge bg-secondary ms-2">${crypto.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td><strong>${precio}</strong></td>
      <td class="${claseCambio} fw-bold">${signoCambio}${cambio24h.toFixed(2)}%</td>
      <td class="text-light-50">${capMercado}</td>
    `;

    tableBody.appendChild(row);
  });
}

function mostrarSpinner(show: boolean): void {
  if (show) {
    spinner.classList.remove('d-none');
  } else {
    spinner.classList.add('d-none');
  }
}