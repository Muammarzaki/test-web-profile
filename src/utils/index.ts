export interface ProgramData {
  [key: string]: {
    title: string;
    description: string;
    sections: {
      sejarah: Section;
      "visi-dan-misi": VisiMisiSection;
      personil: PersonilSection;
      akreditasi: AkreditasiSection;
      "tenaga-pengajar": TenagaPengajarSection;
      kurikulum: KurikulumSection;
      "fasilitas-prodi": Section;
      "layanan-prodi": LayananProdiSection;
      "prospek-alumni": Section;
    };
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
    img: string;
    nip?: string;
    jabatan?: string;
    pendidikan?: string[];
    bidangKeahlian?: string[];
    penelitian?: {
      judul: string;
      tahun: string;
    }[];
    pengabdian?: {
      judul: string;
      tahun: string;
    }[];
    publikasi?: {
      judul: string;
      tahun: string;
      jurnal: string;
    }[];
  }[];
}

interface KurikulumSection {
  title: string;
  content: {
    semester: number;
    mataKuliah: {
      kode: string;
      nama: string;
      sks: number;
      kategori: string;
    }[];
  }[];
}

interface LayananProdiSection {
  title: string;
  content: {
    nama: string;
    jabatan: string;
    foto: string;
    kontak: {
      telepon: string;
      email: string;
      website: string;
    };
    jamKerja: {
      hari: string;
      pagi: string;
      siang: string;
    };
  };
}

export type ProgramStudi = {
  data: any;
};