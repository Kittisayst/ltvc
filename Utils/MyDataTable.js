export default function MyDatatable(tableID) {
  let table = new DataTable(`#${tableID}`, {
    ordering: false,
    info: false,
    paging: true,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "ທັງໝົດ"],
    ],
    pageLength: 25,
    dom: "Blftip",
    buttons: [
      "excel",
      {
        extend: "pdfHtml5",
        download: "open",
      },
    ],
    language: {
      emptyTable: "ບໍ່ພົບຂໍ້ມູນໃນຕາຕະລາງ",
      info: "ສະແດງ _START_ ເຖິງ _END_ ຈາກ _TOTAL_ ແຖວ",
      infoEmpty: "ສະແດງ 0 ເຖິງ 0 ຈາກ 0 ແຖວ",
      infoFiltered: "(ກັ່ນຕອງຂໍ້ມູນ _MAX_ ທຸກແຖວ)",
      infoThousands: ",",
      lengthMenu: "ສະແດງ _MENU_ ແຖວ",
      loadingRecords: "ກຳລັງໂຫຼດຂໍ້ມູນ...",
      processing: "ກຳລັງດຳເນີນການ...",
      search: "ຄົ້ນຫາ: ",
      zeroRecords: "ບໍ່ພົບຂໍ້ມູນ",
      paginate: {
        first: "ໜ້າທຳອິດ",
        previous: "ກ່ອນໜ້ານີ້",
        next: "ໜ້າຕໍ່ໄປ",
        last: "ໜ້າສຸດທ້າຍ",
      },
      aria: {
        sortAscending: ": ເປີດໃຊ້ການຈັດລຽງຂໍ້ມູນແຕ່ນ້ອຍຫາໃຫຍ່",
        sortDescending: ": ເປີດໃຊ້ການຈັດລຽງຂໍ້ມູນແຕ່ໃຫຍ່ຫານ້ອຍ",
      },
    },
  });
}

function MyDatatabLength(tableID, length) {
  let table = new DataTable(`#${tableID}`, {
    ordering: false,
    info: false,
    paging: true,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "ທັງໝົດ"],
    ],
    pageLength: length,
    dom: "Blftip",
    buttons: [
      "excel",
      {
        extend: "pdfHtml5",
        download: "open",
      },
    ],
    language: {
      emptyTable: "ບໍ່ພົບຂໍ້ມູນໃນຕາຕະລາງ",
      info: "ສະແດງ _START_ ເຖິງ _END_ ຈາກ _TOTAL_ ແຖວ",
      infoEmpty: "ສະແດງ 0 ເຖິງ 0 ຈາກ 0 ແຖວ",
      infoFiltered: "(ກັ່ນຕອງຂໍ້ມູນ _MAX_ ທຸກແຖວ)",
      infoThousands: ",",
      lengthMenu: "ສະແດງ _MENU_ ແຖວ",
      loadingRecords: "ກຳລັງໂຫຼດຂໍ້ມູນ...",
      processing: "ກຳລັງດຳເນີນການ...",
      search: "ຄົ້ນຫາ: ",
      zeroRecords: "ບໍ່ພົບຂໍ້ມູນ",
      paginate: {
        first: "ໜ້າທຳອິດ",
        previous: "ກ່ອນໜ້ານີ້",
        next: "ໜ້າຕໍ່ໄປ",
        last: "ໜ້າສຸດທ້າຍ",
      },
      aria: {
        sortAscending: ": ເປີດໃຊ້ການຈັດລຽງຂໍ້ມູນແຕ່ນ້ອຍຫາໃຫຍ່",
        sortDescending: ": ເປີດໃຊ້ການຈັດລຽງຂໍ້ມູນແຕ່ໃຫຍ່ຫານ້ອຍ",
      },
    },
  });
}

export { MyDatatabLength };
