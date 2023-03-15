export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load(){
    this.entries = 
    [
      {
        login: 'raulrodmo',
        name: 'Raul Rodrigues',
        public_repos: '33',
        followers: '15'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '33',
        followers: '15'
      }
    ]
  }
}

export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update(){
    this.removeAllTr()
      
    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src= `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt= `Imagem de${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers


      this.tbody.append(row)
    })

  }

  createRow(){
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/raulrodmo.png" alt="Imagem de raulrodmo">
        <a href="https://github.com/raulrodmo" target="_blank">
          <p>Raul Rodrigues</p>
          <span>raulrodmo</span>
        </a>
          
      </td>
      <td class="repositories">29</td>
      <td class="followers">15</td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `

    return tr
  }

  removeAllTr(){
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}