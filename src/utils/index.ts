export interface ProgramStudi {
  title: string;
  description: string;
  sections: {
    sejarah: Section;
    "visi-dan-misi": VisiMisiSection;
    personil: PersonilSection;
    akreditasi: AkreditasiSection;
    "tenaga-pengajar": TenagaPengajarSection;
    kurikulum: Section;
    "fasilitas-prodi": Section;
    "layanan-prodi": Section;
    "prospek-alumni": Section;
  };
}

interface Section {
  title: string;
  content: string;
}

interface VisiMisiSection {
  title: string;
  content: {
    visi: string;
    misi: {
      judul: string;
      isi: string;
    }[];
    tujuan: {
      judul: string;
      isi: string;
    }[];
  };
}

interface PersonilSection {
  title: string;
  content: {
    nama: string;
    nip: string;
    pangkat: string;
    img: string;
  }[];
}

interface AkreditasiSection {
  title: string;
  content: {
    akreditasi: string;
    suratAkreditasi: {
      isi: string;
      link: string;
    };
    expiredSurat: string;
  };
}

interface TenagaPengajarSection {
  title: string;
  content: {
    slug: string;
    nama: string;
  }[];
}
