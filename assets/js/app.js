/* =========================================================
   SITH · Coop Tulcán — comportamiento de la interfaz
   - Dibuja menú lateral y barra superior según el perfil
   - Íconos, pestañas, modales, chips, interruptores, avisos
   ========================================================= */
(function () {
  const ICONS = {
    dashboard:'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    usuarios:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    persona:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    personaMas:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
    reloj:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    horasExtra:'<path d="M10 2h4"/><path d="M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
    documento:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    calendario:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    calCheck:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    billetera:'<rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M16 15h2"/>',
    banco:'<path d="M3 21h18"/><path d="M5 21V10"/><path d="M19 21V10"/><path d="M9 21V10"/><path d="M15 21V10"/><path d="M2 10 12 3l10 7z"/>',
    salud:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/><path d="M3.2 12h4.3l1.5-3 3 6 1.5-3h7.3"/>',
    casco:'<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',
    reportes:'<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    escudo:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    bitacora:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    ajustes:'<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>',
    medalla:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    campana:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    buscar:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>',
    chevronR:'<path d="m9 18 6-6-6-6"/>',
    chevronL:'<path d="m15 18-6-6 6-6"/>',
    mas:'<path d="M12 5v14"/><path d="M5 12h14"/>',
    descargar:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    subir:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    filtro:'<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
    ojo:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    cerrar:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    alerta:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    salir:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    editar:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    borrar:'<path d="M3 6h18"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
    huella:'<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .13-5.35 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
    menu:'<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    maleta:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    enlace:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    firma:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
    casa:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    libro:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    bandeja:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    retorno:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
    lista:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    imprimir:'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    mapa:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    refrescar:'<path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M3 21v-5h5"/>',
    candado:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    correo:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    enviar:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    tabla:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/>',
    pdf:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15h1.5a1.5 1.5 0 0 0 0-3H9v6"/>',
    excel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 13 4 5"/><path d="m13 13-4 5"/>',
    copiar:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    estrella:'<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    catalogo:'<path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/>',
    llave:'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
    tendencia:'<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    mapaG:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    sobre:'<path d="M3 7l9 6 9-6"/><rect x="3" y="5" width="18" height="14" rx="2"/>',
    agua:'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    pulso:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  };
  const svg = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.info}</svg>`;
  window.SITH = { svg };

  const ROLES = {
    th:  { nombre:'Lucía Andrade', cargo:'Administrador TH', ini:'LA', perfil:'TALENTO HUMANO', home:'index.html' },
    jefe:{ nombre:'Carlos Benavides', cargo:'Jefe de Agencia Ibarra', ini:'CB', perfil:'JEFE DEPARTAMENTAL', home:'bandeja-jefatura.html' },
    emp: { nombre:'Andrea Paspuel', cargo:'Oficial de Negocios', ini:'AP', perfil:'EMPLEADO', home:'portal.html' },
  };
  const MENU = {
    th: [
      ['General', [['dashboard','Dashboard','index.html','dashboard'],['portal','Mi portal','portal.html','persona']]],
      ['Gestión de personal', [['colaboradores','Colaboradores','colaboradores.html','usuarios'],['vinculacion','Vinculación laboral','vinculacion.html','maleta'],['vinculados','Vinculados','vinculados.html','enlace'],['acciones','Acciones de personal','acciones-personal.html','firma'],['patrimonio','Patrimonio','patrimonio.html','casa'],['capacitaciones','Capacitaciones','capacitaciones.html','libro'],['evaluacion','Evaluación de desempeño','evaluacion.html','medalla','En espera']]],
      ['Asistencia', [['asistencia','Consulta de asistencia','asistencia.html','reloj'],['marcaciones','Marcaciones reales','marcaciones.html','huella'],['inasistencias','Inasistencias','inasistencias.html','alerta',4],['horas','Horas extras','horas-extras.html','horasExtra']]],
      ['Novedades', [['permisos','Permisos y licencias','permisos.html','documento',9],['vacgest','Saldos de vacaciones','vacaciones-gestion.html','calendario'],['retornos','Control de retornos','retornos.html','retorno']]],
      ['Nómina', [['nomina','Cálculo de nómina','nomina.html','billetera'],['acreditacion','Acreditación y roles','acreditacion.html','banco']]],
      ['Salud y seguridad', [['sigso','SIGSO · Salud ocupacional','sigso.html','salud'],['contratistas','Contratistas (ATS)','contratistas.html','casco']]],
      ['Reportes', [['reportes','Centro de reportes','reportes.html','reportes']]],
      ['Administración', [['catalogos','Catálogos','catalogos.html','catalogo'],['usuarios','Usuarios y perfiles','usuarios.html','escudo'],['bitacora','Bitácora de auditoría','bitacora.html','bitacora'],['config','Configuración','configuracion.html','ajustes']]],
    ],
    jefe: [
      ['General', [['portal','Mi portal','portal.html','persona']]],
      ['Mi equipo', [['bandeja','Bandeja de aprobación','bandeja-jefatura.html','bandeja',7],['calendario','Calendario de vacaciones','calendario-equipo.html','calCheck'],['asistencia','Asistencia del equipo','asistencia.html','reloj'],['horas','Horas extras','horas-extras.html','horasExtra']]],
      ['Autoservicio', [['solicitud','Solicitar permiso','solicitud-permiso.html','documento'],['missol','Mis solicitudes','mis-solicitudes.html','lista'],['vacaciones','Mis vacaciones','vacaciones.html','calendario'],['retorno','Registrar retorno','retorno.html','retorno'],['rol','Mi rol de pagos','rol-pagos.html','billetera']]],
    ],
    emp: [
      ['General', [['portal','Mi portal','portal.html','persona']]],
      ['Solicitudes', [['solicitud','Solicitar permiso','solicitud-permiso.html','documento'],['missol','Mis solicitudes','mis-solicitudes.html','lista',2],['vacaciones','Mis vacaciones','vacaciones.html','calendario'],['retorno','Registrar retorno','retorno.html','retorno']]],
      ['Mi información', [['miasis','Mi asistencia','mi-asistencia.html','reloj'],['rol','Mi rol de pagos','rol-pagos.html','billetera'],['ficha','Mi ficha personal','ficha.html','persona'],['vinculados','Mis vinculados','vinculados.html','enlace'],['patrimonio','Mi declaración patrimonial','patrimonio.html','casa']]],
    ],
  };

  function getRole() {
    const q = new URLSearchParams(location.search).get('rol');
    if (q && ROLES[q]) { localStorage.setItem('sith-role', q); return q; }
    const forced = document.body.dataset.role;
    if (forced) { localStorage.setItem('sith-role', forced); return forced; }
    return localStorage.getItem('sith-role') || 'th';
  }

  function buildShell() {
    const b = document.body;
    if (b.dataset.shell === 'none') return;
    const role = getRole();
    const R = ROLES[role];
    const page = b.dataset.page || '';
    const content = document.querySelector('main.content');
    const groups = MENU[role].map(([g, items]) => {
      const has = items.some(i => i[0] === page);
      const open = has || g === 'General' || role !== 'th';
      return `<div class="nav-group${open ? '' : ' closed'}"><button class="nav-gt" type="button">${g}${svg('chevron')}</button><div class="nav-items">${
        items.map(([k, l, href, ic, cnt]) => `<a href="${href}" class="${k === page ? 'active' : ''}">${svg(ic)}<span>${l}</span>${cnt ? `<span class="cnt"${typeof cnt === 'string' ? ' style="background:#5F6F67"' : ''}>${cnt}</span>` : ''}</a>`).join('')
      }</div></div>`;
    }).join('');
    const app = document.createElement('div');
    app.className = 'app';
    app.innerHTML = `
      <aside class="sidebar">
        <a class="brand" href="${R.home}"><span class="logo"><img src="assets/img/logo-isotipo.png" alt="Coop Tulcán"></span>
          <span><span class="t1">COOPERATIVA DE AHORRO Y CRÉDITO</span><br><span class="t2">TULCÁN LTDA.</span></span></a>
        <div class="sys"><span>SITH · TALENTO HUMANO</span><span class="role">${R.perfil}</span></div>
        <nav class="nav">${groups}</nav>
        <div class="sb-foot"><span>SITH v1.0 · ISO 9001</span><a href="login.html">${svg('salir')}Salir</a></div>
      </aside>
      <div class="main">
        <header class="topbar">
          <button type="button" class="icon-btn" title="Menú">${svg('menu')}</button>
          <span class="crumb">${b.dataset.ruta || 'Inicio'}</span>
          <span class="spacer"></span>
          <label class="search">${svg('buscar')}<input placeholder="Buscar colaborador, cédula…"></label>
          ${role === 'th' ? `<button type="button" class="tb-btn" data-dd="dd-ag">Agencia: Matriz Tulcán ${svg('chevron')}
            <div class="dd" id="dd-ag">${['Todas las agencias','Matriz Tulcán','Agencia Ibarra','Agencia El Ángel','Agencia San Gabriel','Agencia Huaca','Agencia Cayambe','Agencia Quito','Agencia Otavalo','Agencia Sangolquí'].map((a,i)=>`<a href="#" class="${i===1?'sel':''}">${svg('mapa')}${a}</a>`).join('')}</div></button>`
            : `<span class="tb-btn" title="Ámbito de datos según tu perfil">${svg('mapa')}${role === 'jefe' ? 'Ámbito: Agencia Ibarra' : 'Matriz Tulcán'}</span>`}
          <button type="button" class="icon-btn" data-dd="dd-not" title="Notificaciones">${svg('campana')}<span class="dot"></span>
            <div class="dd" id="dd-not" style="min-width:320px;text-align:left">
              <div class="lbl" style="padding:6px 10px">Notificaciones</div>
              <a href="bandeja-jefatura.html">${svg('documento')}<span><b>Carlos Benavides</b> aprobó 3 permisos<br><span class="small muted">Hace 5 min</span></span></a>
              <a href="inasistencias.html">${svg('alerta')}<span><b>4 omisiones</b> de marcación sin justificar<br><span class="small muted">Hace 1 h</span></span></a>
              <a href="nomina.html">${svg('billetera')}<span>Pre-nómina con <b>3 desviaciones</b> &gt; 15 %<br><span class="small muted">Hoy 08:10</span></span></a>
              <a href="sigso.html">${svg('salud')}<span><b>6 exámenes</b> ocupacionales por vencer<br><span class="small muted">Ayer</span></span></a>
            </div></button>
          <div class="user" data-dd="dd-user"><span class="avatar" style="width:36px;height:36px">${R.ini}</span>
            <span><span class="nm">${R.nombre}</span><br><span class="small muted">${R.cargo}</span></span>
            <div class="dd" id="dd-user">
              <div class="lbl" style="padding:6px 10px">Cambiar perfil</div>
              <button type="button" data-role-go="th" class="${role==='th'?'sel':''}">${svg('escudo')}Talento Humano</button>
              <button type="button" data-role-go="jefe" class="${role==='jefe'?'sel':''}">${svg('usuarios')}Jefe departamental</button>
              <button type="button" data-role-go="emp" class="${role==='emp'?'sel':''}">${svg('persona')}Empleado</button>
              <hr><a href="ficha.html">${svg('persona')}Mi perfil</a><a href="mapa.html">${svg('mapaG')}Mapa del prototipo</a>
              <a href="login.html">${svg('salir')}Cerrar sesión</a>
            </div></div>
        </header>
      </div>`;
    b.prepend(app);
    app.querySelector('.main').appendChild(content);
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll('i[data-i]').forEach(el => { el.outerHTML = svg(el.dataset.i, el.className); });
  }

  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.innerHTML = svg('check') + '<span>' + msg + '</span>';
    t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
  }
  window.SITH.toast = toast;

  function bind() {
    document.addEventListener('click', e => {
      const t = e.target;
      const gt = t.closest('.nav-gt'); if (gt) { gt.parentElement.classList.toggle('closed'); return; }
      const rg = t.closest('[data-role-go]'); if (rg) { localStorage.setItem('sith-role', rg.dataset.roleGo); location.href = ROLES[rg.dataset.roleGo].home; return; }
      const ddBtn = t.closest('[data-dd]');
      if (ddBtn && !t.closest('.dd')) { const dd = document.getElementById(ddBtn.dataset.dd); const was = dd.classList.contains('open'); document.querySelectorAll('.dd.open').forEach(d => d.classList.remove('open')); if (!was) dd.classList.add('open'); e.stopPropagation(); return; }
      if (!t.closest('.dd')) document.querySelectorAll('.dd.open').forEach(d => d.classList.remove('open'));
      const tb = t.closest('.tabs button');
      if (tb) { const tabs = tb.parentElement; [...tabs.children].forEach(x => x.classList.toggle('on', x === tb)); const grp = tabs.dataset.tabs; if (grp) { document.querySelectorAll(`[data-tab-group="${grp}"] > .tab-panel, .tab-panel[data-group="${grp}"]`).forEach(p => p.classList.toggle('on', p.dataset.tab === tb.dataset.tab)); } return; }
      const ch = t.closest('.chip'); if (ch && ch.parentElement.classList.contains('chips') && !ch.parentElement.dataset.multi) { [...ch.parentElement.children].forEach(x => x.classList.toggle('on', x === ch)); }
      else if (ch && ch.parentElement.dataset.multi) ch.classList.toggle('on');
      const sg = t.closest('.seg button'); if (sg) { [...sg.parentElement.children].forEach(x => x.classList.toggle('on', x === sg)); const tgt = sg.dataset.show; if (tgt) { (sg.dataset.hide || '').split(',').forEach(h => h && document.querySelectorAll(h).forEach(n => n.style.display = 'none')); document.querySelectorAll(tgt).forEach(n => n.style.display = ''); } }
      const sw = t.closest('.switch'); if (sw) sw.classList.toggle('on');
      const mo = t.closest('[data-modal]'); if (mo) { e.preventDefault(); document.getElementById(mo.dataset.modal).classList.add('open'); return; }
      if (t.closest('[data-close]') || t.classList.contains('modal-bg')) { const m = t.closest('.modal-bg') || t; m.classList.remove('open'); }
      const ts = t.closest('[data-toast]'); if (ts) { e.preventDefault(); toast(ts.dataset.toast); const m = ts.closest('.modal-bg'); if (m) m.classList.remove('open'); }
      const hr = t.closest('[data-href]'); if (hr && !t.closest('button,a,input,.act')) location.href = hr.dataset.href;
      const all = t.closest('input[data-check-all]'); if (all) { const tbl = all.closest('table'); tbl.querySelectorAll('tbody input[type=checkbox]').forEach(c => { c.checked = all.checked; c.closest('tr').classList.toggle('hl', all.checked); }); }
      const rc = t.closest('tbody input[type=checkbox]'); if (rc) rc.closest('tr').classList.toggle('hl', rc.checked);
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-bg.open').forEach(m => m.classList.remove('open')); });
  }

  buildShell();
  hydrateIcons();
  bind();
  window.SITH.hydrateIcons = hydrateIcons;
})();
