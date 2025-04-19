const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
      ubicacion: "789 Quiet Lane, Suburbia, CA 90123",
      habitaciones: 2,
      banos: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
      nombre: "Loft artístico en barrio bohemio",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Loft con diseño único ideal para artistas y creativos, ubicado en una zona llena de cultura.",
      ubicacion: "321 Art Street, Downtown, CA 90210",
      habitaciones: 1,
      banos: 1,
      costo: 1800,
      smoke: true,
      pets: false
    }
  ];
  
  const container = document.getElementById('alquilerContainer');
  
  propiedades_alquiler.forEach((prop) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="Imagen del departamento" />
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
  