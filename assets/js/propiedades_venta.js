const propiedades_venta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/987/555/nueva-york-09212018-366965.jpg?webp",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banos: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg?imagick=1&size=1000",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banos: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: "https://www.lanacion.com.ar/resizer/v2/la-mansion-predilecta-de-walt-disney-conocida-CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg?auth=f0a77ece3c9deb238be2b6bd03c400054cf3f0d57fda67c39c21dfb9fd2f4e56&width=880&height=586&quality=70&smart=true",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      banos: 3,
      costo: 4500,
      smoke: false,
      pets: true
    },
    {
      nombre: "Penthouse de lujo con vista panorámica",
      src: "https://cdn.delujo.pe/data/img/proyecto/original/prm_2223.webp",
      descripcion: "Increíble penthouse con terrazas privadas y acabados premium.",
      ubicacion: "Skyline Tower, Downtown, CA 90001",
      habitaciones: 3,
      banos: 2,
      costo: 2500,
      smoke: true,
      pets: false
    }
  ];
  
  const container = document.getElementById('ventaContainer');
  
  propiedades_venta.forEach((prop) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="Imagen de la propiedad" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${prop.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo.toLocaleString()}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas ${prop.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
              ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              <i class="fas ${prop.pets ? 'fa-paw' : 'fa-ban'}"></i>
              ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  });
  